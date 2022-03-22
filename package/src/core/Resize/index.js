"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resize = void 0;
const react_1 = __importDefault(require("react"));
const creator_1 = require("../AnimationCreator/creator");
function Resize(props) {
    const { delay = 0, repeat = 'infinite', duration = 3000, children, widthRange, heightRange, } = props;
    const animationName = creator_1.animationCreator.createAnimation('rotate', `from{ 
        width:
        ${widthRange && widthRange[0]}px;
         height:${heightRange && heightRange[0]}px;}
       to{
        width:
        ${widthRange && widthRange[1]}px;
        height:${heightRange && heightRange[1]}px;}`);
    const style = Object.assign({ animationName: `${animationName}`, animationDuration: `${duration}ms`, animationIterationCount: repeat === 'infinite' ? repeat : `${repeat}ms`, animationDelay: `${delay}ms` }, children.props.style);
    return react_1.default.createElement("div", { style: style }, children);
}
exports.Resize = Resize;
