import { ApplicationRef, Injectable, ComponentFactoryResolver, Injector, ComponentRef, EmbeddedViewRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentType } from './../core/index';
import { Wormhole, ComponentWormhole, TemplateWormhole } from './wormhole';

@Injectable()
export class WormholeService {

  private bootstrapReady: Promise<any>;
  private bootstrapReadyResolve;

  constructor(private appRef: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver, private defaultInjector: Injector) {
    this.bootstrapReady = new Promise((resolve) => {
      this.bootstrapReadyResolve = resolve;
    });
  }

  attachComponent<T>(componentClass: ComponentType<T>, node?: HTMLElement) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const componentRef = componentFactory.create(this.defaultInjector);
    const componentRefRootNode = this.getComponentRootNode(componentRef);

    this.appRef.attachView(componentRef.hostView);

    this.getNode(node).then(targetNode => {
      if (targetNode) {
        targetNode.appendChild(componentRefRootNode);
      }
    });

    return {
      componentRef,
      dispose: () => {
        this.appRef.detachView(componentRef.hostView);
        this.getNode(node).then(targetNode => {
          if (targetNode) {
            targetNode.removeChild(componentRefRootNode);
          }
        });
      }
    };
  }

  ready() {
    this.bootstrapReadyResolve();
  }

  private getNode(node?: HTMLElement) {
    if (node) {
      return Promise.resolve(node);
    } else {
      return this.bootstrapReady.then(() => {
        const rootComponents = this.appRef['_rootComponents'];
        const rootComponent = rootComponents.length && rootComponents[0];
        if (!rootComponent) {
          console.log('Root View Container not found');
          return null;
        }
        return this.getComponentRootNode(rootComponent);
      });
    }
  }

  private getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}