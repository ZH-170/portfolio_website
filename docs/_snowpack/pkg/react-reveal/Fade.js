import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../common/index-8af8b000.js';
import { p as propTypes, g as globals, w as wrap_1 } from '../common/wrap-a6a3e6db.js';

var Fade_1 = createCommonjsModule(function (module, exports) {
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.distance,t=e.left,p=e.right,a=e.up,l=e.down,i=e.top,u=e.bottom,n=e.big,s=e.mirror,d=e.opposite,_=(r?r.toString():0)+((t?1:0)|(p?2:0)|(i||l?4:0)|(u||a?8:0)|(s?16:0)|(d?32:0)|(o?64:0)|(n?128:0));if(lookup.hasOwnProperty(_))return lookup[_];var f=t||p||a||l||i||u,y=void 0,b=void 0;if(f){if(!s!=!(o&&d)){var v=[p,t,u,i,l,a];t=v[0],p=v[1],i=v[2],u=v[3],a=v[4],l=v[5];}var c=r||(n?"2000px":"100%");y=t?"-"+c:p?c:"0",b=l||i?"-"+c:a||u?c:"0";}return lookup[_]=(0, globals.animation)((o?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+y+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {opacity: 1;transform: none;} "),lookup[_]}function Fade(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:globals.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o.children,t=(o.out,o.forever),p=o.timeout,a=o.duration,l=void 0===a?globals.defaults.duration:a,i=o.delay,u=void 0===i?globals.defaults.delay:i,n=o.count,s=void 0===n?globals.defaults.count:n,d=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),_={make:make,duration:void 0===p?l:p,delay:u,forever:t,count:s,style:{animationFillMode:"both"},reverse:d.left};return e?(0, _wrap2.default)(d,_,_,r):_}Object.defineProperty(exports,"__esModule",{value:!0});var _wrap2=_interopRequireDefault(wrap_1),propTypes$1={out:propTypes.bool,left:propTypes.bool,right:propTypes.bool,top:propTypes.bool,bottom:propTypes.bool,big:propTypes.bool,mirror:propTypes.bool,opposite:propTypes.bool,duration:propTypes.number,timeout:propTypes.number,distance:propTypes.string,delay:propTypes.number,count:propTypes.number,forever:propTypes.bool},lookup={};Fade.propTypes=propTypes$1,exports.default=Fade,module.exports=exports.default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Fade_1);

export default __pika_web_default_export_for_treeshaking__;
