"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypographyHelpers;
(function (TypographyHelpers) {
    var Size;
    (function (Size) {
        Size["size1"] = "is-size-1";
        Size["size2"] = "is-size-2";
        Size["size3"] = "is-size-3";
        Size["size4"] = "is-size-4";
        Size["size5"] = "is-size-5";
        Size["size6"] = "is-size-6";
        Size["size7"] = "is-size-7";
    })(Size = TypographyHelpers.Size || (TypographyHelpers.Size = {}));
    var ResponsiveSize;
    (function (ResponsiveSize) {
        ResponsiveSize["size1Mobile"] = "is-size-1-mobile";
        ResponsiveSize["size1Tablet"] = "is-size-1-tablet";
        ResponsiveSize["size1Touch"] = "is-size-1-touch";
        ResponsiveSize["size1Desktop"] = "is-size-1-desktop";
        ResponsiveSize["size1Widescreen"] = "is-size-1-widescreen";
        ResponsiveSize["size1Fullhd"] = "is-size-1-fullhd";
        ResponsiveSize["size2Mobile"] = "is-size-2-mobile";
        ResponsiveSize["size2Tablet"] = "is-size-2-tablet";
        ResponsiveSize["size2Touch"] = "is-size-2-touch";
        ResponsiveSize["size2Desktop"] = "is-size-2-desktop";
        ResponsiveSize["size2Widescreen"] = "is-size-2-widescreen";
        ResponsiveSize["size2Fullhd"] = "is-size-2-fullhd";
        ResponsiveSize["size3Mobile"] = "is-size-3-mobile";
        ResponsiveSize["size3Tablet"] = "is-size-3-tablet";
        ResponsiveSize["size3Touch"] = "is-size-3-touch";
        ResponsiveSize["size3Desktop"] = "is-size-3-desktop";
        ResponsiveSize["size3Widescreen"] = "is-size-3-widescreen";
        ResponsiveSize["size3Fullhd"] = "is-size-3-fullhd";
        ResponsiveSize["size4Mobile"] = "is-size-4-mobile";
        ResponsiveSize["size4Tablet"] = "is-size-4-tablet";
        ResponsiveSize["size4Touch"] = "is-size-4-touch";
        ResponsiveSize["size4Desktop"] = "is-size-4-desktop";
        ResponsiveSize["size4Widescreen"] = "is-size-4-widescreen";
        ResponsiveSize["size4Fullhd"] = "is-size-4-fullhd";
        ResponsiveSize["size5Mobile"] = "is-size-5-mobile";
        ResponsiveSize["size5Tablet"] = "is-size-5-tablet";
        ResponsiveSize["size5Touch"] = "is-size-5-touch";
        ResponsiveSize["size5Desktop"] = "is-size-5-desktop";
        ResponsiveSize["size5Widescreen"] = "is-size-5-widescreen";
        ResponsiveSize["size5Fullhd"] = "is-size-5-fullhd";
        ResponsiveSize["size6Mobile"] = "is-size-6-mobile";
        ResponsiveSize["size6Tablet"] = "is-size-6-tablet";
        ResponsiveSize["size6Touch"] = "is-size-6-touch";
        ResponsiveSize["size6Desktop"] = "is-size-6-desktop";
        ResponsiveSize["size6Widescreen"] = "is-size-6-widescreen";
        ResponsiveSize["size6Fullhd"] = "is-size-6-fullhd";
        ResponsiveSize["size7Mobile"] = "is-size-7-mobile";
        ResponsiveSize["size7Tablet"] = "is-size-7-tablet";
        ResponsiveSize["size7Touch"] = "is-size-7-touch";
        ResponsiveSize["size7Desktop"] = "is-size-7-desktop";
        ResponsiveSize["size7Widescreen"] = "is-size-7-widescreen";
        ResponsiveSize["size7Fullhd"] = "is-size-7-fullhd";
    })(ResponsiveSize = TypographyHelpers.ResponsiveSize || (TypographyHelpers.ResponsiveSize = {}));
    var TextColors;
    (function (TextColors) {
        TextColors["White"] = "has-text-white";
        TextColors["Black"] = "has-text-black";
        TextColors["light"] = "has-text-light";
        TextColors["Dark"] = "has-text-dark";
        TextColors["Primary"] = "has-text-primary";
        TextColors["Success"] = "has-text-success";
        TextColors["Warning"] = "has-text-warning";
        TextColors["Danger"] = "has-text-danger";
        TextColors["BlackBis"] = "has-text-black-bis";
        TextColors["BlackTer"] = "has-text-black-ter";
        TextColors["GrayDarker"] = "has-text-grey-darker";
        TextColors["GrayDark"] = "has-text-grey-dark";
        TextColors["Gray"] = "has-text-grey";
        TextColors["GrayLight"] = "has-text-grey-light";
        TextColors["GrayLighter"] = "has-text-grey-lighter";
        TextColors["WhiteTer"] = "has-text-white-ter";
        TextColors["WhiteBis"] = "has-text-white-bis";
    })(TextColors = TypographyHelpers.TextColors || (TypographyHelpers.TextColors = {}));
    var TextAlignment;
    (function (TextAlignment) {
        TextAlignment["Cenered"] = "has-text-centered";
        TextAlignment["Justified"] = "has-text-justified";
        TextAlignment["Left"] = "has-text-left";
        TextAlignment["Right"] = "has-text-right";
    })(TextAlignment = TypographyHelpers.TextAlignment || (TypographyHelpers.TextAlignment = {}));
    var ResponsiveTextAlignment;
    (function (ResponsiveTextAlignment) {
        ResponsiveTextAlignment["CeneredMobile"] = "has-text-centered-mobile";
        ResponsiveTextAlignment["CeneredTablet"] = "has-text-centered-tablet";
        ResponsiveTextAlignment["CeneredTabletOnly"] = "has-text-centered-tablet-only";
        ResponsiveTextAlignment["CeneredTouch"] = "has-text-centered-touch";
        ResponsiveTextAlignment["CeneredDesktop"] = "has-text-centered-desktop";
        ResponsiveTextAlignment["CeneredDesktopOnly"] = "has-text-centered-desktop-only";
        ResponsiveTextAlignment["CeneredWidescreen"] = "has-text-centered-widescreen";
        ResponsiveTextAlignment["CeneredWidescreenOnly"] = "has-text-centered-widescreen-only";
        ResponsiveTextAlignment["CeneredFullhd"] = "has-text-centered-fullhd";
        ResponsiveTextAlignment["JustifiedMobile"] = "has-text-justified-mobile";
        ResponsiveTextAlignment["JustifiedTablet"] = "has-text-justified-tablet";
        ResponsiveTextAlignment["JustifiedTabletOnly"] = "has-text-justified-tablet-only";
        ResponsiveTextAlignment["JustifiedTouch"] = "has-text-justified-touch";
        ResponsiveTextAlignment["JustifiedDesktop"] = "has-text-justified-desktop";
        ResponsiveTextAlignment["JustifiedDesktopOnly"] = "has-text-justified-desktop-only";
        ResponsiveTextAlignment["JustifiedWidescreen"] = "has-text-justified-widescreen";
        ResponsiveTextAlignment["JustifiedWidescreenOnly"] = "has-text-justified-widescreen-only";
        ResponsiveTextAlignment["JustifiedFullhd"] = "has-text-justified-fullhd";
        ResponsiveTextAlignment["LeftMobile"] = "has-text-left-mobile";
        ResponsiveTextAlignment["LeftTablet"] = "has-text-left-tablet";
        ResponsiveTextAlignment["LeftTabletOnly"] = "has-text-left-tablet-only";
        ResponsiveTextAlignment["LeftTouch"] = "has-text-left-touch";
        ResponsiveTextAlignment["LeftDesktop"] = "has-text-left-desktop";
        ResponsiveTextAlignment["LeftDesktopOnly"] = "has-text-left-desktop-only";
        ResponsiveTextAlignment["LeftWidescreen"] = "has-text-left-widescreen";
        ResponsiveTextAlignment["LeftWidescreenOnly"] = "has-text-left-widescreen-only";
        ResponsiveTextAlignment["LeftFullhd"] = "has-text-left-fullhd";
        ResponsiveTextAlignment["RightMobile"] = "has-text-right-mobile";
        ResponsiveTextAlignment["RightTablet"] = "has-text-right-tablet";
        ResponsiveTextAlignment["RightTabletOnly"] = "has-text-right-tablet-only";
        ResponsiveTextAlignment["RightTouch"] = "has-text-right-touch";
        ResponsiveTextAlignment["RightDesktop"] = "has-text-right-desktop";
        ResponsiveTextAlignment["RightDesktopOnly"] = "has-text-right-desktop-only";
        ResponsiveTextAlignment["RightWidescreen"] = "has-text-right-widescreen";
        ResponsiveTextAlignment["RightWidescreenOnly"] = "has-text-right-widescreen-only";
        ResponsiveTextAlignment["RightFullhd"] = "has-text-right-fullhd";
    })(ResponsiveTextAlignment = TypographyHelpers.ResponsiveTextAlignment || (TypographyHelpers.ResponsiveTextAlignment = {}));
    var TextTransformation;
    (function (TextTransformation) {
        TextTransformation["Capitalized"] = "is-capitalized";
        TextTransformation["Lowercase"] = "is-lowercase";
        TextTransformation["Uppercase"] = "is-uppercase";
    })(TextTransformation = TypographyHelpers.TextTransformation || (TypographyHelpers.TextTransformation = {}));
    var TextWeight;
    (function (TextWeight) {
        TextWeight["Light"] = "has-text-weight-light";
        TextWeight["Normal"] = "has-text-weight-normal";
        TextWeight["Semibold"] = "has-text-weight-semibold";
        TextWeight["Bold"] = "has-text-weight-bold";
    })(TextWeight = TypographyHelpers.TextWeight || (TypographyHelpers.TextWeight = {}));
})(TypographyHelpers = exports.TypographyHelpers || (exports.TypographyHelpers = {}));
exports.default = TypographyHelpers;
//# sourceMappingURL=typography-helpers.js.map