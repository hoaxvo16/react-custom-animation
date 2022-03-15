"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fade = void 0;
const creator_1 = require("../AnimationCreator/creator");
const react_1 = __importDefault(require("react"));
function Fade(props) {
    const { delay = 0, repeat = 'infinite', duration = 600, children, opacityRange = [0, 1], } = props;
    const animationName = creator_1.animationCreator.createAnimation('fadeIn', `from{opacity: ${opacityRange[0]};}to{opacity: ${opacityRange[1]};}`);
    const style = Object.assign({ animationName: `${animationName}`, animationDuration: `${duration}ms`, animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}s`, animationDelay: `${delay}ms` }, children.props.style);
    console.log(children);
    return react_1.default.createElement("div", { style: style }, children);
}
exports.Fade = Fade;
