"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationCreator = void 0;
const random_1 = require("../utils/random");
class AnimationCreator {
    constructor() {
        this.map = new Map();
        this.classNameLen = 10;
        this.generateClassName = () => {
            let className = '';
            for (let i = 0; i < this.classNameLen; i++) {
                const firstChar = (0, random_1.randomInteger)(65, 90);
                const secondChar = (0, random_1.randomInteger)(97, 122);
                className +=
                    String.fromCharCode(firstChar) + String.fromCharCode(secondChar);
            }
            return className;
        };
    }
    createAnimation(type, range) {
        if (this.map.has(type + range)) {
            return this.map.get(type + range);
        }
        else {
            const animationName = this.createKeyFrame(range);
            this.map.set(type + range, animationName);
            return animationName;
        }
    }
    createKeyFrame(range) {
        const animationName = this.generateClassName();
        const styleSheet = window.document.styleSheets[0];
        const keyFrame = `@keyframes ${animationName}{${range}}`;
        styleSheet.insertRule(keyFrame, styleSheet.cssRules.length);
        return animationName;
    }
}
exports.animationCreator = new AnimationCreator();
