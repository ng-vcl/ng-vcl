var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HintOptions } from './types';
var HintService = /** @class */ (function () {
    function HintService() {
        this.anchors = {};
        this.overlay$ = new Subject();
        this.registration$ = new Subject();
        this.finish$ = new Subject();
        this.showingStep$ = new Subject();
    }
    /**
     * Initialize hint service
     * @method initialize
     * @param  options init options
     * @return void
     */
    HintService.prototype.initialize = function (options) {
        if (options === void 0) { options = new HintOptions(); }
        this.hintOptions = Object.assign(new HintOptions(), options);
        var nodes = document.getElementsByTagName(this.hintOptions.stepTag);
        this.steps = this.initSteps(nodes);
        this.startAt(0);
        this.overlay$.next(true);
    };
    /**
     * Show step
     * @method show
     * @param  step [description]
     */
    HintService.prototype.show = function (step) {
        var anchor = this.anchors[step.selector + "_" + step.order];
        if (!anchor) {
            return;
        }
        anchor.showStep();
    };
    /**
     * Show step next to {Step} this.currentStep
     * @method showNext
     */
    HintService.prototype.showNext = function () {
        this.currentStep = this.currentStep != undefined ? this.steps[this.steps.indexOf(this.currentStep) + 1] : undefined;
        var anchor = this.currentStep != undefined ? this.anchors[this.currentStep.selector + "_" + this.currentStep.order] : null;
        if (!anchor) {
            return;
        }
        anchor.showStep();
    };
    /**
     * On overlay click behavior
     * @method overlayNext
     */
    HintService.prototype.overlayNext = function () {
        if (this.hasNext() && this.currentStep != undefined) {
            this.anchors[this.currentStep.selector + "_" + this.currentStep.order].hideStep();
            this.showNext();
        }
        else {
            this.end();
        }
    };
    /**
     * Show step previous to {Step} this.currentStep
     * @method showPrevious
     */
    HintService.prototype.showPrevious = function () {
        this.currentStep = this.currentStep != undefined ? this.steps[this.steps.indexOf(this.currentStep) - 1] : undefined;
        var anchor = this.currentStep != undefined ? this.anchors[this.currentStep.selector + "_" + this.currentStep.order] : null;
        if (!anchor) {
            return;
        }
        anchor.showStep();
    };
    /**
     * Register hint component
     * @method register
     * @param  selector  bonded to
     * @param  component itself
     */
    HintService.prototype.register = function (selector, component) {
        if (this.anchors[selector]) {
            throw 'selector ' + selector + ' already registered!';
        }
        this.anchors[selector] = component;
        this.registration$.next(true);
    };
    /**
     * Is {Step} this.currentStep has next
     * @method hasNext
     * @return
     */
    HintService.prototype.hasNext = function () {
        return this.currentStep != undefined ? this.steps.indexOf(this.currentStep) < this.steps.length - 1 : false;
    };
    /**
     * Is {Step} this.currentStep has previous
     * @method hasPrevious
     * @return
     */
    HintService.prototype.hasPrevious = function () {
        return this.currentStep != undefined ? this.steps.indexOf(this.currentStep) > 0 : false;
    };
    /**
     * Finalize our hint tour.
     * @method end
     */
    HintService.prototype.end = function () {
        this.overlay$.next(false);
        var anchor = this.currentStep != undefined ? this.anchors[this.currentStep.selector + "_" + this.currentStep.order] : null;
        if (!anchor) {
            return;
        }
        this.currentStep = undefined;
        anchor.hideStep();
        this.finish$.next(true);
    };
    /**
     * Start hint tour at some position
     * @method startAt
     * @param  stepId position in this.steps
     */
    HintService.prototype.startAt = function (stepId) {
        this.currentStep = this.steps[stepId];
        this.show(this.currentStep);
    };
    /**
     * Convert Element[] to Step[]
     * @method initSteps
     * @param   nodes
     * @return
     */
    HintService.prototype.initSteps = function (nodes) {
        var steps = [];
        for (var i = 0; i < nodes.length; i++) {
            steps.push({
                selector: nodes[i].getAttribute('selector'),
                order: Number(nodes[i].getAttribute('order')) || this.hintOptions.defaultOrder,
            });
        }
        return steps = steps.sort(function (el1, el2) {
            return el1.order - el2.order;
        });
    };
    HintService.prototype.putOverlay = function () {
        document.getElementsByTagName('body');
    };
    HintService = __decorate([
        Injectable()
    ], HintService);
    return HintService;
}());
export { HintService };
