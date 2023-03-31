'use strict';OBR.Ao||function(){class a{C(b){try{if(b){this.i=b;OBR.Qa.$b(b,{Wj:!0});var c=b.B();if(c){b.Lc()&&this.F(c);var e=b.bA(),d=OBR.b.N(c).querySelector(".display-frame");if(d||e){var f=b.gb("display",null);if(f||f.html){var h=OBR.b.N(c).querySelector(".ob-display-wrapper"),k=h&&h.getAttribute("data-oburl");if(e)this.j(b,c,f,k);else{var g=this.A(f.html,b.l("enableDisplayAdClick",!0)?k:null);d.setAttribute("srcdoc",g);if(-1!==["FMS_SOCIAL_1","FMS_NATIVE_VIDEO_1","FMS_DC_LABS_1","FMS_ONYX_SPOTLIGHT"].indexOf(b.J())){const l=
d.getAttribute("sandbox");d.setAttribute("sandbox",`allow-same-origin ${l}`);const m=d.parentElement;m.style.height=`${f.height}px`;document.createDocumentFragment().appendChild(d);m.appendChild(d)}}}else OBR.error({name:"DisplayControllerError",message:"No display data was sent by renderer"})}}}}catch(l){OBR.error({name:"DisplayControllerError",message:l})}}j(b,c,e,d){const f=`ob-sf-${b.J()}-${b.L()}`;(b=OBR.b.N(c).querySelector(".ob-display-frame-target"))?(b.setAttribute("id",f),!0!==OBR.g.zq.Eh()?
this.s(()=>{setTimeout(()=>{this.c(f,e,d)},0)}):this.c(f,e,d)):OBR.error({name:"DisplayControllerError",message:"safe frame target frame cannot be found"})}s(b){void 0===window.$sf&&(b=OBR.b.Va(0,"https://widgets.outbrain.com/safeframe/top.js",!0,!1,b,null),OBR.b.vb(b));OBR.g.zq.Fi(!0)}c(b,c,e){if("undefined"===typeof $sf&&void 0===window.$sf)OBR.error({name:"DisplayControllerError",message:"safe frame failed to load"});else{$sf.host.Config()||new $sf.host.Config({renderFile:"https://widgets.outbrain.com/safeframe/r.html",
positions:{}});new $sf.host.PosConfig({id:b,w:c.width,h:c.height,dest:b,supports:{"exp-ovr":!1,"exp-push":!1,"read-cookie":!1,"write-cookie":!1}});var d=null;e&&(d=new $sf.host.PosMeta({wf:e},"ob"));b=new $sf.host.Position(b,c.html,d);$sf.host.render(b)}}F(b){const c=b.querySelector(".ob-widget");if(!b.shadowRoot&&c&&b.attachShadow){const e=this.i.vh(),d=this.i.Lf();OBR.b.attachShadow(b,c,{mode:"open"},e,d)}}A(b,c){return`
            <div>
              <script >
                const fire = (url) => {
                  const pixel = document.createElement('img');
                  pixel.src = url;
                  pixel.async = true;
                  pixel.setAttribute('height', '1');
                  pixel.setAttribute('width', '1');
                  pixel.setAttribute('display', 'none');
                  document.body.appendChild(pixel);
                };
                
                ${c?`document.addEventListener('fire', function() {fire('${c}')}, {once: true});`:""}
              </script>
              <div id="displayContent">$ORIGINAL_HTML</div>
              <script>              
                window.onload = function() {
                  setTimeout(function() {
                    const css = '$RESET_CSS';
                    const styleElement = document.createElement('style');
                    const head = document.getElementsByTagName('head');
                    styleElement.setAttribute('id', 'ob-css-reset');
                    styleElement.appendChild(document.createTextNode(css));
                    head[0].appendChild(styleElement);
                  }, 0);
               };
              </script>
            </div>`.replace("$RESET_CSS","html, body, div, span, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}").replace("$ORIGINAL_HTML",
b)}}OBR.Ao=new a;OBR.o.X(OBR.o.v.bj)}();
