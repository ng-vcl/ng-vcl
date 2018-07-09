var HintOptions = /** @class */ (function () {
    function HintOptions() {
        this.elementsDisabled = true;
        this.defaultPosition = HintConfig.DEFAULT_POSITION;
        this.defaultOrder = HintConfig.DEFAULT_ORDER;
        this.defaultLayer = HintConfig.DEFAULT_PX_LAYER;
        this.applyRelative = HintConfig.APPLY_RELATIVE;
        this.stepTag = HintConfig.HINT_TAG;
        this.dismissOnOverlay = HintConfig.DISMISS_ON_OVERLAY;
    }
    return HintOptions;
}());
export { HintOptions };
export var HintConfig = {
    HINT_TAG: 'vcl-tour-step',
    DEFAULT_POSITION: 'bottom',
    Z_INDEX: '999',
    DEFAULT_ORDER: 99,
    DEFAULT_PX_LAYER: 15,
    APPLY_RELATIVE: true,
    DISMISS_ON_OVERLAY: false,
};
export var Placement;
(function (Placement) {
    Placement["Top"] = "top";
    Placement["Bottom"] = "bottom";
    Placement["Left"] = "left";
    Placement["Right"] = "right";
})(Placement || (Placement = {}));
