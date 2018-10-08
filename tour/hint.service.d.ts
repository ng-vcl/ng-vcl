import { Subject } from 'rxjs';
import { TourComponent } from './tour.component';
import { IHintOptions, HintOptions, Step } from './types';
export declare class HintService {
    private static readonly Tag;
    private readonly tag;
    private debug;
    currentStep: Step | undefined;
    steps: Step[];
    options: HintOptions;
    anchors: {
        [selectorOrderCombination: string]: TourComponent;
    };
    overlay$: Subject<boolean>;
    registration$: Subject<boolean>;
    finish$: Subject<boolean>;
    showingStep$: Subject<Step>;
    /**
     * Initialize hint service
     * @method initialize
     * @param  options init options
     * @return void
     */
    initialize(options?: IHintOptions): void;
    /**
     * Show step
     * @method show
     * @param  step [description]
     */
    show(step: Step): void;
    /**
     * Show step next to {Step} this.currentStep
     * @method showNext
     */
    showNext(): void;
    /**
     * On overlay click behavior
     * @method overlayNext
     */
    overlayNext(): void;
    /**
     * Show step previous to {Step} this.currentStep
     * @method showPrevious
     */
    showPrevious(): void;
    /**
     * Register hint component
     * @method register
     * @param  target  bonded to
     * @param  component itself
     */
    register(target: string, component: TourComponent): void;
    /**
     * Is {Step} this.currentStep has next
     * @method hasNext
     * @return
     */
    hasNext(): boolean;
    /**
     * Is {Step} this.currentStep has previous
     * @method hasPrevious
     * @return
     */
    hasPrevious(): boolean;
    /**
     * Finalize our hint tour.
     * @method end
     */
    end(): void;
    /**
     * Start hint tour at some position
     * @method start
     * @param  stepId position in this.steps
     */
    start(stepId?: number): void;
    /**
     * Convert Element[] to Step[]
     * @method initSteps
     * @param   nodes
     * @return
     */
    private initSteps(nodes);
    private putOverlay();
}