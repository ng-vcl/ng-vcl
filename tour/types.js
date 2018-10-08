var HintOptions = /** @class */ (function () {
    function HintOptions() {
        this.debug = false;
        this.elementsDisabled = true;
        this.defaultOrder = HintConfig.DEFAULT_ORDER;
        this.defaultLayer = HintConfig.DEFAULT_PX_LAYER;
        this.applyRelative = HintConfig.APPLY_RELATIVE;
        this.stepTag = HintConfig.HINT_TAG;
        this.dismissOnOverlay = HintConfig.DISMISS_ON_OVERLAY;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.exitLabel = 'Exit';
        this.previousIcon = 'fa fa-chevron-left';
        this.nextIcon = 'fa fa-chevron-right';
        this.exitIcon = 'fa fa-close';
        this.buttonClass = '';
    }
    return HintOptions;
}());
export { HintOptions };
export var HintConfig = {
    HINT_TAG: 'vcl-tour-step',
    Z_INDEX: '999',
    DEFAULT_ORDER: 99,
    DEFAULT_PX_LAYER: 15,
    APPLY_RELATIVE: true,
    DISMISS_ON_OVERLAY: false,
};
