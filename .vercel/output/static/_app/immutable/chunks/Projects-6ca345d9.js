import{S as U,i as W,s as X,k as o,a as D,q as N,l as i,m as v,h as d,c as P,r as q,I as S,n as t,b as Y,G as e,u as J,B as R}from"./index-e7c877ee.js";function Z(c){let s,m,l,j,f,p,n,V,$,u,g,E=c[1](c[0].projectName)[1]+"",A,x,_,y,w=c[1](c[0].projectName)[0]+"",B,C,b,I=c[0].projectDesc+"",G,z,h,F,T;return{c(){s=o("div"),m=o("div"),l=o("img"),f=D(),p=o("div"),n=o("img"),$=D(),u=o("div"),g=o("p"),A=N(E),x=D(),_=o("p"),y=N("@"),B=N(w),C=D(),b=o("p"),G=N(I),z=D(),h=o("a"),F=N("Bekijk project"),this.h()},l(r){s=i(r,"DIV",{class:!0});var a=v(s);m=i(a,"DIV",{});var K=v(m);l=i(K,"IMG",{src:!0,class:!0,alt:!0}),K.forEach(d),f=P(a),p=i(a,"DIV",{class:!0});var M=v(p);n=i(M,"IMG",{src:!0,class:!0,alt:!0}),$=P(M),u=i(M,"DIV",{});var k=v(u);g=i(k,"P",{class:!0});var L=v(g);A=q(L,E),L.forEach(d),x=P(k),_=i(k,"P",{class:!0});var H=v(_);y=q(H,"@"),B=q(H,w),H.forEach(d),C=P(k),b=i(k,"P",{class:!0});var O=v(b);G=q(O,I),O.forEach(d),k.forEach(d),M.forEach(d),z=P(a),h=i(a,"A",{class:!0,href:!0});var Q=v(h);F=q(Q,"Bekijk project"),Q.forEach(d),a.forEach(d),this.h()},h(){S(l.src,j=c[0].projectThumb.split("/")[2])||t(l,"src",j),t(l,"class","h-60 w-full object-cover"),t(l,"alt","Thumbmail"),S(n.src,V=c[0].projectAvatar)||t(n,"src",V),t(n,"class","w-14 h-14 rounded-full object-cover aspect-square"),t(n,"alt","Profiel foto"),t(g,"class","font-bold text-2xl"),t(_,"class","text-gray-500"),t(b,"class","text-gray-500 dark:text-white"),t(p,"class","py-2 px-1 flex gap-2"),t(h,"class","bg-black rounded-b text-white flex items-center p-2 justify-center font-semibold text-lg"),t(h,"href",T=`/projects/${c[0].id}`),t(s,"class","border rounded-md w-96 h-96 shadow grid dark:text-white")},m(r,a){Y(r,s,a),e(s,m),e(m,l),e(s,f),e(s,p),e(p,n),e(p,$),e(p,u),e(u,g),e(g,A),e(u,x),e(u,_),e(_,y),e(_,B),e(u,C),e(u,b),e(b,G),e(s,z),e(s,h),e(h,F)},p(r,[a]){a&1&&!S(l.src,j=r[0].projectThumb.split("/")[2])&&t(l,"src",j),a&1&&!S(n.src,V=r[0].projectAvatar)&&t(n,"src",V),a&1&&E!==(E=r[1](r[0].projectName)[1]+"")&&J(A,E),a&1&&w!==(w=r[1](r[0].projectName)[0]+"")&&J(B,w),a&1&&I!==(I=r[0].projectDesc+"")&&J(G,I),a&1&&T!==(T=`/projects/${r[0].id}`)&&t(h,"href",T)},i:R,o:R,d(r){r&&d(s)}}}function ee(c,s,m){let{projects:l}=s;const j=f=>f.split("/");return console.log(l),c.$$set=f=>{"projects"in f&&m(0,l=f.projects)},[l,j]}class se extends U{constructor(s){super(),W(this,s,ee,Z,X,{projects:0})}}export{se as P};