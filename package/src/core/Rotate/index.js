"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
const react_1 = __importDefault(require("react"));
const creator_1 = require("../AnimationCreator/creator");
function Rotate(props) {
    const { delay = 0, repeat = 'infinite', duration = 3000, children, degRange = [0, 180], } = props;
    const animationName = creator_1.animationCreator.createAnimation('rotate', `from{transform: rotate(${degRange[0]}deg);}to{transform: rotate(${degRange[1]}deg);}`);
    const style = Object.assign({ animationName: `${animationName}`, animationDuration: `${duration}ms`, animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}ms`, animationDelay: `${delay}ms` }, children.props.style);
    return react_1.default.createElement("div", { style: style }, children);
}
exports.Rotate = Rotate;
