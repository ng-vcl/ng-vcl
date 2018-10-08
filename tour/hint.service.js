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
        this.tag = HintService_1.Tag;
        this.anchors = {};
        this.overlay$ = new Subject();
        this.registration$ = new Subject();
        this.finish$ = new Subject();
        this.showingStep$ = new Subject();
    }
    HintService_1 = HintService;
    /**
     * Initialize hint service
     * @method initialize
     * @param  options init options
     * @return void
     */
    HintService.prototype.initialize = function (options) {
        if (options === void 0) { options = new HintOptions(); }
        var tag = this.tag + ".initialize()";
        var debug = this.debug || false;
        this.options = Object.assign(new HintOptions(), options);
        if (debug)
            console.log(tag, 'this.options:', this.options);
        this.debug = this.options.debug || false;
        if (debug)
            console.log(tag, 'this.options.stepTag:', this.options.stepTag);
        var nodes = document.getElementsByTagName(this.options.stepTag);
        if (debug)
            console.log(tag, 'nodes:', nodes);
        this.steps = this.initSteps(nodes);
        if (debug)
            console.log(tag, 'this.steps:', this.steps);
    };
    /**
     * Show step
     * @method show
     * @param  step [description]
     */
    HintService.prototype.show = function (step) {
        var tag = this.tag + ".show()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'step:', step);
        if (!step)
            return;
        var anchor = this.anchors[step.target + "_" + step.order];
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
        var tag = this.tag + ".showNext()";
        var debug = this.debug || false;
        this.currentStep = this.currentStep != undefined ? this.steps[this.steps.indexOf(this.currentStep) + 1] : undefined;
        if (debug)
            console.log(tag, 'this.currentStep:', this.currentStep);
        var anchor = this.currentStep != undefined ? this.anchors[this.currentStep.target + "_" + this.currentStep.order] : null;
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
        var tag = this.tag + ".overlayNext()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'this.currentStep:', this.currentStep);
        if (this.hasNext() && this.currentStep != undefined) {
            this.anchors[this.currentStep.target + "_" + this.currentStep.order].hideStep();
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
        var tag = this.tag + ".showPrevious()";
        var debug = this.debug || false;
        this.currentStep = this.currentStep != undefined ? this.steps[this.steps.indexOf(this.currentStep) - 1] : undefined;
        if (debug)
            console.log(tag, 'this.currentStep:', this.currentStep);
        var anchor = this.currentStep != undefined ? this.anchors[this.currentStep.target + "_" + this.currentStep.order] : null;
        if (!anchor) {
            return;
        }
        anchor.showStep();
    };
    /**
     * Register hint component
     * @method register
     * @param  target  bonded to
     * @param  component itself
     */
    HintService.prototype.register = function (target, component) {
        if (this.anchors[target]) {
            throw 'target ' + target + ' already registered!';
        }
        this.anchors[target] = component;
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
        var tag = this.tag + ".end()";
        var debug = this.debug || false;
        this.overlay$.next(false);
        if (debug)
            console.log(tag, 'this.currentStep:', this.currentStep);
        var anchor = this.currentStep != undefined ? this.anchors[this.currentStep.target + "_" + this.currentStep.order] : null;
        if (!anchor) {
            return;
        }
        this.currentStep = undefined;
        anchor.hideStep();
        this.finish$.next(true);
    };
    /**
     * Start hint tour at some position
     * @method start
     * @param  stepId position in this.steps
     */
    HintService.prototype.start = function (stepId) {
        if (stepId === void 0) { stepId = 0; }
        var tag = this.tag + ".start()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'stepId:', stepId);
        if (debug)
            console.log(tag, 'this.steps:', this.steps);
        if (!this.steps)
            this.initialize();
        this.currentStep = this.steps[stepId];
        if (debug)
            console.log(tag, 'this.currentStep:', this.currentStep);
        if (!this.currentStep)
            return;
        this.show(this.currentStep);
        this.overlay$.next(true);
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
                target: nodes[i].getAttribute('target'),
                order: Number(nodes[i].getAttribute('order')) || this.options.defaultOrder,
            });
        }
        return steps.sort(function (el1, el2) { return el1.order - el2.order; });
    };
    HintService.prototype.putOverlay = function () {
        document.getElementsByTagName('body');
    };
    HintService.Tag = 'HintService';
    HintService = HintService_1 = __decorate([
        Injectable()
    ], HintService);
    return HintService;
    var HintService_1;
}());
export { HintService };
