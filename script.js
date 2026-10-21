const $=s=>document.querySelector(s),cv=$('#c');
const R=new THREE.WebGLRenderer({canvas:cv,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,.1,2000);S.add(cam);
cam.add(new THREE.PointLight(0xffffff,1.4,0,0));S.add(new THREE.AmbientLight(0x4a3f7a,.9));
const AD=THREE.AdditiveBlending,clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function glow(rgb){const k=document.createElement('canvas');k.width=k.height=128;const x=k.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);
g.addColorStop(0,`rgba(${rgb},1)`);g.addColorStop(.25,`rgba(${rgb},.45)`);g.addColorStop(1,`rgba(${rgb},0)`);x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(k)}
function mark(rgb){const k=document.createElement('canvas');k.width=k.height=128;const x=k.getContext('2d');
const g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,`rgba(${rgb},.9)`);g.addColorStop(.3,`rgba(${rgb},.25)`);g.addColorStop(1,`rgba(${rgb},0)`);
x.fillStyle=g;x.fillRect(0,0,128,128);x.strokeStyle=`rgb(${rgb})`;x.lineWidth=3;x.beginPath();x.arc(64,64,30,0,7);x.stroke();return new THREE.CanvasTexture(k)}
function ptex(c){const k=document.createElement('canvas');k.width=512;k.height=256;const x=k.getContext('2d'),g=x.createLinearGradient(0,0,0,256);
g.addColorStop(0,c[0]);g.addColorStop(.5,c[1]);g.addColorStop(1,c[2]);x.fillStyle=g;x.fillRect(0,0,512,256);
for(let i=0;i<80;i++){x.globalAlpha=.08+Math.random()*.18;x.fillStyle=c[i%3];x.beginPath();x.ellipse(Math.random()*512,Math.random()*256,40+Math.random()*160,3+Math.random()*24,0,0,7);x.fill()}
return new THREE.CanvasTexture(k)}

// Галактика
const G=new THREE.Group();S.add(G);
const N=90000,pos=new Float32Array(N*3),col=new Float32Array(N*3),A=new THREE.Color('#ff3ca8'),B=new THREE.Color('#8b5cf6'),C=new THREE.Color('#22d3ee'),tc=new THREE.Color();
for(let i=0;i<N;i++){let x,y,z,t;
if(i%6==0){const r=Math.pow(Math.random(),2)*6,a=Math.random()*6.283,b=Math.random()*3.14;x=r*Math.sin(b)*Math.cos(a);z=r*Math.sin(b)*Math.sin(a);y=r*Math.cos(b)*.45;t=0}
else{const r=Math.pow(Math.random(),1.5)*34+.5,a=(i%4)*1.5708+r*.27,q=()=>Math.pow(Math.random(),2.5)*(Math.random()<.5?1:-1)*(.4+r*.07);
x=Math.cos(a)*r+q();z=Math.sin(a)*r+q();y=q()*.45;t=r/34}
tc.copy(t<.5?A:B).lerp(t<.5?B:C,t<.5?t*2:(t-.5)*2).multiplyScalar(.45+Math.random()*.8);
pos.set([x,y,z],i*3);col.set([tc.r,tc.g,tc.b],i*3)}
const gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.BufferAttribute(pos,3));gg.setAttribute('color',new THREE.BufferAttribute(col,3));
G.add(new THREE.Points(gg,new THREE.PointsMaterial({size:.32,map:glow('255,255,255'),vertexColors:true,transparent:true,depthWrite:false,blending:AD})));
const core=new THREE.Sprite(new THREE.SpriteMaterial({map:glow('255,90,190'),blending:AD,transparent:true,depthWrite:false,opacity:.8}));core.scale.set(26,26,1);G.add(core);
// Фон
const bp=new Float32Array(3000*3);for(let i=0;i<3000;i++){const v=new THREE.Vector3().randomDirection?0:0;const a=Math.random()*6.283,b=Math.acos(2*Math.random()-1),r=500+Math.random()*400;
bp.set([r*Math.sin(b)*Math.cos(a),r*Math.cos(b),r*Math.sin(b)*Math.sin(a)],i*3)}
const bg=new THREE.BufferGeometry();bg.setAttribute('position',new THREE.BufferAttribute(bp,3));
S.add(new THREE.Points(bg,new THREE.PointsMaterial({size:2.2,map:glow('200,220,255'),transparent:true,depthWrite:false,blending:AD,sizeAttenuation:false})));

// Планеты
const P=[
{n:'НОКС-7',t:'Газовый гигант',r:1.2,c:['#6d28d9','#c084fc','#22d3ee'],o:[11,.5,.6],ring:1,rgb:'192,132,252',i:[['Расстояние','11 000 св. лет'],['Температура','−140 °C'],['Спутники','23'],['Сутки','9 часов']],d:'Фиолетовый исполин с бурями размером с континент. Его кольца из ледяных частиц переливаются всеми оттенками сиреневого.'},
{n:'ЭМБЕР',t:'Пустынный мир',r:.8,c:['#ff3ca8','#fb923c','#fde68a'],o:[16,2.4,-.8],rgb:'251,146,60',i:[['Расстояние','16 000 св. лет'],['Температура','+78 °C'],['Спутники','2'],['Сутки','31 час']],d:'Раскалённая планета, где дюны из красного песка движутся быстрее, чем ветер на Земле. Ночью небо здесь светится розовым.'},
{n:'ГЛАЦИА',t:'Ледяной мир',r:.9,c:['#22d3ee','#a5f3fc','#e0f2fe'],o:[21,4.1,.9],rgb:'165,243,252',i:[['Расстояние','21 000 св. лет'],['Температура','−95 °C'],['Спутники','5'],['Сутки','18 часов']],d:'Планета, целиком покрытая голубым льдом. Под километровой коркой скрывается тёплый океан.'},
{n:'ВИРИДА',t:'Океанический мир',r:1,c:['#0ea5e9','#34d399','#e0f2fe'],o:[26,5.2,-.5],rgb:'52,211,153',i:[['Расстояние','26 000 св. лет'],['Температура','+19 °C'],['Спутники','1'],['Сутки','26 часов']],d:'Бирюзовые океаны и плавучие острова-леса. Здесь обнаружены следы примитивной жизни.'},
{n:'ПУЛЬСАР-МЮ',t:'Лавовая планета',r:.7,c:['#1a0b2e','#ff3ca8','#f43f5e'],o:[8,3.2,.3],rgb:'255,60,168',i:[['Расстояние','8 000 св. лет'],['Температура','+640 °C'],['Спутники','0'],['Сутки','7 часов']],d:'Тёмный мир с реками лавы, светящимися магентой. Близость к ядру галактики делает его самым горячим в округе.'},
{n:'ОРФЕЯ',t:'Кольцевой гигант',r:1.4,c:['#4338ca','#a78bfa','#f0abfc'],o:[29,1.2,1.2],ring:1,rgb:'167,139,250',i:[['Расстояние','29 000 св. лет'],['Температура','−170 °C'],['Спутники','41'],['Сутки','12 часов']],d:'Спокойный гигант с тройным кольцом. Его 41 спутник образуют настоящую мини-систему.'},
{n:'КВАРЦ',t:'Кристаллический мир',r:.75,c:['#a21caf','#e879f9','#67e8f9'],o:[14,.2,-1.2],rgb:'232,121,249',i:[['Расстояние','14 000 св. лет'],['Температура','−20 °C'],['Спутники','3'],['Сутки','22 часа']],d:'Поверхность усыпана гигантскими кристаллами, которые переливаются под светом звёзд и поют на ветру.'},
{n:'ТИХАЯ ГАВАНЬ',t:'Обитаемая планета',r:.95,c:['#059669','#38bdf8','#fef3c7'],o:[23,2.9,.2],rgb:'56,189,248',i:[['Расстояние','23 000 св. лет'],['Температура','+22 °C'],['Спутники','2'],['Сутки','24 часа']],d:'Мягкий климат, зелёные континенты и тёплые моря. Идеальное место для первой колонии.'}];
const mk=[],nav=$('#nav'),lbs=$('#labels');
P.forEach((p,i)=>{const g=new THREE.Group();g.position.set(Math.cos(p.o[1])*p.o[0],p.o[2],Math.sin(p.o[1])*p.o[0]);
p.m=new THREE.Mesh(new THREE.SphereGeometry(p.r,48,32),new THREE.MeshStandardMaterial({map:ptex(p.c),roughness:.8,emissive:new THREE.Color(p.c[0]),emissiveIntensity:.18}));
g.add(p.m,new THREE.Mesh(new THREE.SphereGeometry(p.r*1.13,32,24),new THREE.MeshBasicMaterial({color:p.c[2],transparent:true,opacity:.2,side:THREE.BackSide,blending:AD,depthWrite:false})));
if(p.ring){const rg=new THREE.Mesh(new THREE.RingGeometry(p.r*1.5,p.r*2.4,96),new THREE.MeshBasicMaterial({color:p.c[1],side:2,transparent:true,opacity:.45,depthWrite:false}));rg.rotation.x=1.3;rg.rotation.y=.3;g.add(rg)}
const s=new THREE.Sprite(new THREE.SpriteMaterial({map:mark(p.rgb),blending:AD,transparent:true,depthTest:false}));s.userData.i=i;g.add(s);mk.push(s);p.g=g;p.s=s;G.add(g);
p.l=document.createElement('div');p.l.className='lb';p.l.textContent=p.n;lbs.appendChild(p.l);
p.b=document.createElement('button');p.b.textContent=p.n;p.b.onclick=()=>focus(i);nav.appendChild(p.b)});

// Камера
const T=new THREE.Vector3(),gT=new THREE.Vector3(),W=new THREE.Vector3(),V=new THREE.Vector3();
let th=.8,ph=1.15,d=150,gd=52,foc=-1,hov=-1,t0=performance.now();const keys={};
function focus(i){foc=i;gd=P[i].r*4.8;document.body.classList.add('f');
$('#pn').textContent=P[i].n;$('#pt').textContent=P[i].t;$('#pd').textContent=P[i].d;
$('#pr').innerHTML=P[i].i.map(r=>`<div class="row"><span>${r[0]}</span><span>${r[1]}</span></div>`).join('');
P.forEach((p,j)=>p.b.classList.toggle('on',j==i))}
function out(){foc=-1;gd=52;gT.set(0,0,0);document.body.classList.remove('f');P.forEach(p=>p.b.classList.remove('on'))}
$('#back').onclick=out;addEventListener('keydown',e=>{if(e.key=='Escape')out();keys[e.key.toLowerCase()]=1});addEventListener('keyup',e=>keys[e.key.toLowerCase()]=0);

// Ввод
const ptrs=new Map(),RC=new THREE.Raycaster();let moved=0,pd=0;
const pinch=()=>{const a=[...ptrs.values()];return a.length<2?0:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)};
function pick(e){RC.setFromCamera({x:e.clientX/innerWidth*2-1,y:-e.clientY/innerHeight*2+1},cam);const h=RC.intersectObjects(mk.filter(s=>s.visible));return h.length?h[0].object.userData.i:-1}
cv.addEventListener('pointerdown',e=>{cv.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});moved=0;pd=pinch()});
cv.addEventListener('pointermove',e=>{const p=ptrs.get(e.pointerId);
if(!p){hov=pick(e);cv.style.cursor=hov>=0?'pointer':'grab';return}
const dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;
if(ptrs.size==2){const n=pinch();if(pd)gd=clamp(gd*pd/n,foc>=0?P[foc].r*2.2:4,140);pd=n;moved+=9;return}
moved+=Math.abs(dx)+Math.abs(dy);
if((e.buttons&2||e.shiftKey)&&foc<0){V.setFromMatrixColumn(cam.matrix,0);gT.addScaledVector(V,-dx*d*.0016);V.setFromMatrixColumn(cam.matrix,1);gT.addScaledVector(V,dy*d*.0016)}
else{th-=dx*.006;ph=clamp(ph-dy*.006,.08,3.06)}});
cv.addEventListener('pointerup',e=>{ptrs.delete(e.pointerId);if(moved<6&&!ptrs.size){const i=pick(e);if(i>=0)focus(i)}});
cv.addEventListener('pointercancel',e=>ptrs.delete(e.pointerId));
cv.addEventListener('contextmenu',e=>e.preventDefault());
cv.addEventListener('wheel',e=>{e.preventDefault();gd=clamp(gd*Math.exp(e.deltaY*.0012),foc>=0?P[foc].r*2.2:4,140)},{passive:false});
function size(){R.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()}
addEventListener('resize',size);size();

// Цикл
function loop(now){requestAnimationFrame(loop);const dt=Math.min((now-t0)/1000,.05);t0=now;
G.rotation.y+=dt*.012;P.forEach(p=>p.m.rotation.y+=dt*.25);S.updateMatrixWorld();
if(foc>=0)P[foc].g.getWorldPosition(gT);
else{if(!ptrs.size)th+=dt*.03;const f=(keys.w||keys.arrowup?1:0)-(keys.s||keys.arrowdown?1:0),r=(keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0);
if(f||r){V.set(T.x-cam.position.x,0,T.z-cam.position.z).normalize();gT.addScaledVector(V,f*d*.7*dt);gT.x+=-V.z*r*d*.7*dt*-1;gT.z+=V.x*r*d*.7*dt*-1}}
const k=1-Math.exp(-dt*3);T.lerp(gT,k);d+=(gd-d)*k;
cam.position.set(T.x+d*Math.sin(ph)*Math.cos(th),T.y+d*Math.cos(ph),T.z+d*Math.sin(ph)*Math.sin(th));cam.lookAt(T);
const pulse=1+Math.sin(now*.003)*.12;
P.forEach((p,i)=>{p.g.getWorldPosition(W);const dist=W.distanceTo(cam.position),show=foc<0&&dist>p.r*5;
p.s.visible=show;p.s.scale.setScalar(dist*(i==hov?.095:.07)*pulse);
V.copy(W).project(cam);const vis=show&&V.z<1;p.l.style.display=vis?'block':'none';
if(vis){p.l.style.transform=`translate(${(V.x*.5+.5)*innerWidth}px,${(-V.y*.5+.5)*innerHeight}px) translateX(-50%)`;p.l.classList.toggle('h',i==hov)}});
core.material.opacity=.7+Math.sin(now*.0015)*.1;R.render(S,cam)}
requestAnimationFrame(loop);
