
const CONFIG = {
  // WHATSAPP OFICIAL DA BRASA: (83) 98850-5050
  // Para wa.me usamos somente números: 55 + 83 + 98850-5050
  whatsappNumber: "5583988505050",
  whatsappDisplay: "(83) 98850-5050",
  storeName: "BRASA CASA DE CARNES"
};

const PRODUCTS = [
  {id:"acem-osso",category:"bovinos",name:"ACÉM COM OSSO",price:32.99,unit:"kg"},
  {id:"acem-sem-osso",category:"bovinos",name:"ACÉM SEM OSSO",price:44.99,unit:"kg"},
  {id:"alcatra",category:"bovinos",name:"ALCATRA",price:59.99,unit:"kg"},
  {id:"alcatra-angus",category:"bovinos",name:"ALCATRA ANGUS",price:69.99,unit:"kg",badge:"ANGUS"},
  {id:"bombom-alcatra",category:"bovinos",name:"BOMBOM DE ALCATRA",price:69.99,unit:"kg"},
  {id:"bife-especial",category:"bovinos",name:"BIFE ESPECIAL",price:54.99,unit:"kg"},
  {id:"bife-paris",category:"bovinos",name:"BIFE PARIS",price:44.99,unit:"kg"},
  {id:"bisteca-bovina",category:"bovinos",name:"BISTECA BOVINA",price:44.99,unit:"kg"},
  {id:"capa-file",category:"bovinos",name:"CAPA DE FILÉ",price:49.99,unit:"kg"},
  {id:"cha-fora",category:"bovinos",name:"CHÃ DE FORA",price:49.99,unit:"kg"},
  {id:"chambaril",category:"bovinos",name:"CHAMBARIL",price:24.99,unit:"kg"},
  {id:"chorizo-angus",category:"bovinos",name:"CHORIZO ANGUS",price:79.99,unit:"kg",badge:"ANGUS"},
  {id:"chorizo-bella-black",category:"bovinos",name:"CHORIZO BELLA BLACK",price:89.99,unit:"kg",badge:"PREMIUM"},
  {id:"contrafile",category:"bovinos",name:"CONTRAFILÉ",price:69.99,unit:"kg"},
  {id:"costela-bovina",category:"bovinos",name:"COSTELA BOVINA",price:29.99,unit:"kg"},
  {id:"costela-tiras-angus",category:"bovinos",name:"COSTELA EM TIRAS ANGUS",price:49.99,unit:"kg",badge:"ANGUS"},
  {id:"coxao-mole",category:"bovinos",name:"COXÃO MOLE",price:59.99,unit:"kg"},
  {id:"cupim-cheff",category:"bovinos",name:"CUPIM DO CHEFF",price:49.99,unit:"kg",badge:"DO CHEFF"},
  {id:"cupim-grill",category:"bovinos",name:"CUPIM GRILL",price:69.99,unit:"kg"},
  {id:"figado-bovino",category:"bovinos",name:"FÍGADO BOVINO",price:23.99,unit:"kg"},
  {id:"file-mignon",category:"bovinos",name:"FILÉ MIGNON",price:89.99,unit:"kg",badge:"PREMIUM"},
  {id:"guisado",category:"bovinos",name:"GUISADO",price:44.99,unit:"kg"},
  {id:"lombo-paulista",category:"bovinos",name:"LOMBO PAULISTA",price:49.99,unit:"kg"},
  {id:"maminha",category:"bovinos",name:"MAMINHA",price:49.99,unit:"kg"},
  {id:"medalhao-fraldinha",category:"bovinos",name:"MEDALHÃO DE FRALDINHA",price:49.99,unit:"kg"},
  {id:"medalhao-fraldinha-angus",category:"bovinos",name:"MEDALHÃO DE FRALDINHA ANGUS",price:59.99,unit:"kg",badge:"ANGUS"},
  {id:"moida-dianteira",category:"bovinos",name:"MOÍDA DIANTEIRA",price:39.99,unit:"kg"},
  {id:"moida-especial",category:"bovinos",name:"MOÍDA ESPECIAL",price:44.99,unit:"kg"},
  {id:"mocoto-bovino",category:"bovinos",name:"MOCOTÓ BOVINO",price:15.99,unit:"kg"},
  {id:"musculo-bovino",category:"bovinos",name:"MÚSCULO BOVINO",price:37.99,unit:"kg"},
  {id:"patinho",category:"bovinos",name:"PATINHO",price:54.99,unit:"kg"},
  {id:"paleta-osso",category:"bovinos",name:"PALETA COM OSSO",price:39.99,unit:"kg"},
  {id:"paleta-sem-osso",category:"bovinos",name:"PALETA SEM OSSO",price:44.99,unit:"kg"},
  {id:"peito-bovino-osso",category:"bovinos",name:"PEITO BOVINO COM OSSO",price:28.99,unit:"kg"},
  {id:"picanha-argentina",category:"bovinos",name:"PICANHA ARGENTINA",price:119.99,unit:"kg",badge:"PREMIUM"},
  {id:"picanha-todahora",category:"bovinos",name:"PICANHA TODA HORA",price:99.99,unit:"kg",badge:"PREMIUM"},
  {id:"picanha-maturatta",category:"bovinos",name:"PICANHA MATURATTA",price:119.99,unit:"kg",badge:"PREMIUM"},
  {id:"picanha-uruguaia",category:"bovinos",name:"PICANHA URUGUAIA",price:119.99,unit:"kg",badge:"PREMIUM"},
  {id:"picanha-pull",category:"bovinos",name:"PICANHA PULL",price:109.99,unit:"kg",badge:"PREMIUM"},
  {id:"picanha-angus-cheff",category:"bovinos",name:"PICANHA ANGUS DO CHEFF",price:129.99,unit:"kg",badge:"ANGUS"},
  {id:"picanha-cheff",category:"bovinos",name:"PICANHA DO CHEFF",price:99.99,unit:"kg",badge:"DO CHEFF"},
  {id:"picanha-nacional",category:"bovinos",name:"PICANHA NACIONAL",price:99.99,unit:"kg",badge:"PREMIUM"},
  {id:"picanha-paraguaia",category:"bovinos",name:"PICANHA PARAGUAIA",price:99.99,unit:"kg",badge:"PREMIUM"},
  {id:"rabada-bovina",category:"bovinos",name:"RABADA BOVINA",price:29.99,unit:"kg"},
  {id:"strogonoff-patinho",category:"bovinos",name:"STROGONOFF DE PATINHO",price:54.99,unit:"kg"},

  {id:"asinha-frango",category:"frango",name:"ASINHA DE FRANGO",price:24.99,unit:"kg"},
  {id:"bisteca-frango",category:"frango",name:"BISTECA DE FRANGO",price:21.99,unit:"kg"},
  {id:"coracao-frango",category:"frango",name:"CORAÇÃO DE FRANGO",price:39.99,unit:"kg"},
  {id:"coxa-frango",category:"frango",name:"COXA DE FRANGO",price:14.99,unit:"kg"},
  {id:"coxa-sobrecoxa",category:"frango",name:"COXA E SOBRECOXA",price:17.99,unit:"kg"},
  {id:"coxinha-frango",category:"frango",name:"COXINHA DE FRANGO",price:27.99,unit:"kg"},
  {id:"file-frango",category:"frango",name:"FILÉ DE FRANGO",price:29.99,unit:"kg"},
  {id:"frango-inteiro",category:"frango",name:"FRANGO INTEIRO",price:13.99,unit:"kg"},
  {id:"galinha-caipira",category:"frango",name:"GALINHA CAIPIRA",price:19.99,unit:null},
  {id:"galinha-capoeira-rancho",category:"frango",name:"GALINHA CAPOEIRA D’RANCHO",price:29.99,unit:null},
  {id:"galinha-capoeira-premium",category:"frango",name:"GALINHA CAPOEIRA PREMIUM",price:35.99,unit:null,badge:"PREMIUM"},
  {id:"galinha-matriz",category:"frango",name:"GALINHA MATRIZ",price:10.99,unit:"kg"},
  {id:"peito-frango",category:"frango",name:"PEITO DE FRANGO",price:19.99,unit:"kg"},
  {id:"sobrecoxa",category:"frango",name:"SOBRECOXA",price:17.99,unit:"kg"},

  {id:"bacon-fatiado",category:"suinos",name:"BACON FATIADO",price:42.99,unit:"kg"},
  {id:"bacon-sem-couro",category:"suinos",name:"BACON FATIADO SEM COURO",price:44.99,unit:"kg"},
  {id:"bacon-manta",category:"suinos",name:"BACON MANTA",price:39.99,unit:"kg"},
  {id:"bisteca-suina",category:"suinos",name:"BISTECA SUÍNA",price:29.99,unit:"kg"},
  {id:"costela-suina",category:"suinos",name:"COSTELA SUÍNA",price:29.99,unit:"kg"},
  {id:"file-mignon-suino",category:"suinos",name:"FILÉ MIGNON SUÍNO",price:39.99,unit:"kg"},
  {id:"lombo-suino",category:"suinos",name:"LOMBO SUÍNO",price:34.99,unit:"kg"},
  {id:"panceta-suina",category:"suinos",name:"PANCETA SUÍNA",price:35.99,unit:"kg"},
  {id:"pernil-suino",category:"suinos",name:"PERNIL SUÍNO",price:24.99,unit:"kg"},
  {id:"picanha-suina",category:"suinos",name:"PICANHA SUÍNA",price:39.99,unit:"kg"},

  {id:"linguica-aurora-frango",category:"linguicas",name:"LINGUIÇA AURORA DE FRANGO",price:25.99,unit:"kg"},
  {id:"linguica-bovina",category:"linguicas",name:"LINGUIÇA BOVINA",price:29.99,unit:"kg"},
  {id:"linguica-leao",category:"linguicas",name:"LINGUIÇA LEÃO 500G",price:30.00,unit:"pacote"},
  {id:"linguica-cara-preta",category:"linguicas",name:"LINGUIÇA CARA PRETA PACOTE",price:24.99,unit:"pacote"},
  {id:"linguica-sol-queijo",category:"linguicas",name:"LINGUIÇA SOL COM QUEIJO",price:39.99,unit:"kg"},
  {id:"linguica-toscana",category:"linguicas",name:"LINGUIÇA TOSCANA",price:25.99,unit:"kg"},

  {id:"almondegas-cheff",category:"diversos",name:"ALMÔNDEGAS DO CHEFF",price:39.99,unit:"kg",badge:"DO CHEFF"},
  {id:"almondegas-recheadas",category:"diversos",name:"ALMÔNDEGAS RECHEADAS",price:49.99,unit:"kg"},
  {id:"blend-cheff",category:"diversos",name:"BANDEJA DE BLEND DO CHEFF",price:8.99,unit:"bandeja",badge:"PROMOÇÃO",note:"2 UNIDADES DE 100G CADA"},
  {id:"charque-dianteira",category:"diversos",name:"CHARQUE DIANTEIRA",price:59.99,unit:"kg"},
  {id:"doce-caseiro-g",category:"diversos",name:"DOCE CASEIRO G",price:19.99,unit:null},
  {id:"farofa-lili",category:"diversos",name:"FAROFA LILI 500G",price:19.99,unit:null},
  {id:"farofa-mjm-g",category:"diversos",name:"FAROFA MJM G",price:19.99,unit:null},
  {id:"farofa-mjm-p",category:"diversos",name:"FAROFA MJM P",price:12.99,unit:null},
  {id:"farofa-sabores",category:"diversos",name:"FAROFA SABORES",price:14.99,unit:null},
  {id:"linguica-artesanal-leao",category:"diversos",name:"LINGUIÇA ARTESANAL LEÃO",price:30.00,unit:"pacote"},
  {id:"charque-500g",category:"diversos",name:"PACOTE DE CHARQUE 500G",price:29.99,unit:"pacote"},
  {id:"pao-alho",category:"diversos",name:"PÃO DE ALHO",price:16.99,unit:null}
  ,

  // KITS SEMANAIS — KIT BRASAS
  {id:"kit-brasas-01",category:"kits-semanais",name:"KIT BRASAS 01",price:119.99,unit:"kit",badge:"KIT SEMANAL",details:[
    "500G CARNE MOÍDA",
    "500G BIFE DE COXÃO MOLE",
    "500G BIFE DE FILÉ DE FRANGO",
    "500G CUBOS FILÉ DE FRANGO",
    "500G STROGONOFF DE CARNE"
  ]},
  {id:"kit-brasas-02",category:"kits-semanais",name:"KIT BRASAS 02",price:149.99,unit:"kit",badge:"KIT SEMANAL",details:[
    "500G CARNE MOÍDA",
    "500G BIFE DE COXÃO MOLE",
    "500G BIFE DE CONTRA FILÉ",
    "500G CUBOS DE CHÃ DE FORA",
    "500G STROGONOFF DE PATINHO"
  ]},
  {id:"kit-brasas-03",category:"kits-semanais",name:"KIT BRASAS 03",price:199.99,unit:"kit",badge:"KIT SEMANAL",details:[
    "500G STROGONOFF PATINHO",
    "500G LINGUIÇA (MISTA OU FRANGO)",
    "500G FILÉ DE PEITO EM BIFES",
    "500G MOÍDA DIANTEIRA",
    "500G BISTECA SUÍNA",
    "500G CARNE DE SOL EM CUBOS",
    "500G COXINHA DE FRANGO",
    "500G BIFE DE PATINHO"
  ]},
  {id:"kit-brasas-04",category:"kits-semanais",name:"KIT BRASAS 04",price:199.99,unit:"kit",badge:"KIT SEMANAL",details:[
    "500G BIFE DE ALCATRA",
    "500G PATINHO MOÍDO",
    "500G ALCATRA EM CUBOS",
    "500G LINGUIÇA DE FRANGO",
    "500G ALMÔNDEGAS RECHEADAS",
    "500G FILÉ DE PEITO EM BIFES",
    "2 UND HAMBÚRGUER DE COSTELA",
    "500G CARNE DE PANELA EM CUBOS"
  ]},
  {id:"kit-brasas-05",category:"kits-semanais",name:"KIT BRASAS 05",price:159.99,unit:"kit",badge:"KIT SEMANAL",details:[
    "500G COXÃO MOLE",
    "500G ALMÔNDEGAS",
    "500G CARNE MOÍDA",
    "500G BISTECA BOVINA",
    "500G CUBOS DE CHÃ DE FORA",
    "500G STROGONOFF DE PATINHO"
  ]},

  // KITS CHURRAS
  {id:"kit-churras-01",category:"kits-churras",name:"KIT CHURRAS NA BRASA 01",price:149.99,unit:"kit",badge:"CHURRASCO",details:[
    "500G CHORISO",
    "500G COXINHA",
    "500G PICANHA SUÍNA",
    "500G TOSCANA",
    "1KG COSTELA JANELA CHEFF BLACK",
    "1 PÃO DE ALHO SANTA MASSA"
  ]},
  {id:"kit-churras-02",category:"kits-churras",name:"KIT CHURRAS NA BRASA 02",price:149.99,unit:"kit",badge:"CHURRASCO",details:[
    "500G COSTELA DE CORDEIRO",
    "500G CUPIM CHEFF BLACK",
    "500G COSTELA BLACK CHEFF",
    "500G COXINHA DE FRANGO",
    "500G LINGUIÇA DE CHURRASCO",
    "1 PÃO DE ALHO SANTA MASSA"
  ]},
  {id:"kit-churras-03",category:"kits-churras",name:"KIT CHURRAS NA BRASA 03",price:199.99,unit:"kit",badge:"CHURRASCO",details:[
    "500G PICANHA BLACK DO CHEFF",
    "500G COSTELA CHEFF BLACK",
    "500G COXINHA DA ASA",
    "500G PICANHA SUÍNA",
    "500G LINGUIÇA DE CHURRASCO",
    "500G CHORISO BLACK CHEFF"
  ]},

  // KIT ESPECIAL MEU BURGER
  {id:"kit-meu-burger",category:"meu-burger",name:"KIT ESPECIAL MEU BURGER",price:9.99,unit:"unidade",badge:"MEU BURGER",details:[
    "1 BLEND DE FRALDINHA E COSTELA",
    "2 FATIAS DE BACON",
    "2 FATIAS DE CHEDDAR",
    "1 PÃO BRIOCHE"
  ]}

];

const CATEGORY_LABELS={bovinos:"CORTES BOVINOS",frango:"CORTES DE FRANGO",suinos:"CORTES SUÍNOS",linguicas:"LINGUIÇAS",diversos:"DIVERSOS","kits-semanais":"KITS SEMANAIS","kits-churras":"KITS CHURRAS","meu-burger":"MEU BURGER"};
const state={category:"todos",query:"",cart:loadCart()};
const el={
productGrid:document.querySelector("#productGrid"),resultCount:document.querySelector("#resultCount"),emptyState:document.querySelector("#emptyState"),
searchInput:document.querySelector("#searchInput"),clearSearchButton:document.querySelector("#clearSearchButton"),categoryTabs:document.querySelector("#categoryTabs"),
cartDrawer:document.querySelector("#cartDrawer"),drawerBackdrop:document.querySelector("#drawerBackdrop"),cartItems:document.querySelector("#cartItems"),
cartEmpty:document.querySelector("#cartEmpty"),cartCount:document.querySelector("#cartCount"),mobileCartCount:document.querySelector("#mobileCartCount"),
cartTotal:document.querySelector("#cartTotal"),mobileCartTotal:document.querySelector("#mobileCartTotal"),openCartButton:document.querySelector("#openCartButton"),
heroCartButton:document.querySelector("#heroCartButton"),mobileCartButton:document.querySelector("#mobileCartButton"),closeCartButton:document.querySelector("#closeCartButton"),
clearCartButton:document.querySelector("#clearCartButton"),checkoutButton:document.querySelector("#checkoutButton"),shareButton:document.querySelector("#shareButton"),
toast:document.querySelector("#toast"),visualCatalogButton:document.querySelector("#visualCatalogButton"),closeVisualCatalogButton:document.querySelector("#closeVisualCatalogButton"),
visualSection:document.querySelector("#catalogo-visual")};

function normalizeText(v){return v.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}
function money(v){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v)}
function priceLabel(p){if(p.unit==="kg")return `${money(p.price)}/KG`;if(p.unit==="pacote")return `${money(p.price)} / PACOTE`;if(p.unit==="bandeja")return `${money(p.price)} / BANDEJA`;if(p.unit==="kit")return `${money(p.price)} / KIT`;if(p.unit==="unidade")return `${money(p.price)} / UN.`;return money(p.price)}
function quantityLabel(i,p){if(p.unit==="kg")return `${i.quantity.toFixed(1).replace(".",",")} KG`;if(p.unit==="kit")return `${i.quantity} ${i.quantity===1?"KIT":"KITS"}`;return `${i.quantity} UN.`}
function stepFor(p){return p.unit==="kg"?.1:1}
function getFilteredProducts(){const q=normalizeText(state.query);return PRODUCTS.filter(p=>{const details=(p.details||[]).join(" ");return (state.category==="todos"||p.category===state.category)&&(!q||normalizeText(p.name).includes(q)||normalizeText(CATEGORY_LABELS[p.category]).includes(q)||normalizeText(p.badge||"").includes(q)||normalizeText(details).includes(q))})}
function renderProducts(){
 const products=getFilteredProducts();el.productGrid.replaceChildren();const f=document.createDocumentFragment();
 products.forEach(p=>{const a=document.createElement("article");a.className="product-card";if(p.details?.length)a.classList.add("product-card--kit");const meta=document.createElement("div");meta.className="product-meta";
 const c=document.createElement("span");c.className="product-category";c.textContent=CATEGORY_LABELS[p.category];meta.appendChild(c);
 if(p.badge){const b=document.createElement("span");b.className="product-badge";b.textContent=p.badge;meta.appendChild(b)}
 const h=document.createElement("h3");h.textContent=p.name;a.append(meta,h);
 if(p.note){const n=document.createElement("p");n.className="product-note";n.textContent=p.note;a.appendChild(n)}
 if(p.details?.length){const list=document.createElement("ul");list.className="product-details";p.details.forEach(detail=>{const item=document.createElement("li");item.textContent=detail;list.appendChild(item)});a.appendChild(list)}
 const bottom=document.createElement("div");bottom.className="product-bottom";const price=document.createElement("div");price.className="product-price";
 const cap=document.createElement("small");cap.textContent=p.unit==="kg"?"PREÇO POR KG":p.unit==="kit"?"PREÇO DO KIT":p.unit==="unidade"?"PREÇO POR UNIDADE":"PREÇO";const value=document.createElement("strong");value.textContent=priceLabel(p);price.append(cap,value);
 const add=document.createElement("button");add.className="product-add";add.type="button";add.textContent="+";add.setAttribute("aria-label",`Adicionar ${p.name} ao pedido`);add.addEventListener("click",()=>addToCart(p.id));
 bottom.append(price,add);a.appendChild(bottom);f.appendChild(a)});
 el.productGrid.appendChild(f);el.resultCount.textContent=`${products.length} ${products.length===1?"PRODUTO ENCONTRADO":"PRODUTOS ENCONTRADOS"}`;el.emptyState.hidden=products.length!==0;
}
function loadCart(){try{const p=JSON.parse(localStorage.getItem("brasa-cart"));return Array.isArray(p)?p:[]}catch{return[]}}
function saveCart(){localStorage.setItem("brasa-cart",JSON.stringify(state.cart))}
function getProduct(id){return PRODUCTS.find(p=>p.id===id)}
function addToCart(id){const p=getProduct(id);if(!p)return;const current=state.cart.find(i=>i.id===id);if(current)current.quantity=Number((current.quantity+stepFor(p)).toFixed(2));else state.cart.push({id,quantity:1});saveCart();renderCart();showToast(`${p.name} ADICIONADO AO PEDIDO`)}
function updateQuantity(id,direction){const p=getProduct(id),i=state.cart.find(x=>x.id===id);if(!p||!i)return;const min=p.unit==="kg"?.1:1,next=Number((i.quantity+direction*stepFor(p)).toFixed(2));if(next<min){removeFromCart(id);return}i.quantity=next;saveCart();renderCart()}
function removeFromCart(id){state.cart=state.cart.filter(i=>i.id!==id);saveCart();renderCart()}
function cartTotal(){return state.cart.reduce((sum,i)=>{const p=getProduct(i.id);return p?sum+p.price*i.quantity:sum},0)}
function renderCart(){
 el.cartItems.replaceChildren();const f=document.createDocumentFragment();
 state.cart.forEach(i=>{const p=getProduct(i.id);if(!p)return;const card=document.createElement("article");card.className="cart-item";
 const head=document.createElement("div");head.className="cart-item-head";const txt=document.createElement("div");const h=document.createElement("h3");h.textContent=p.name;
 const price=document.createElement("div");price.className="cart-item-price";price.textContent=priceLabel(p);txt.append(h,price);const rem=document.createElement("button");rem.className="remove-item";rem.type="button";rem.textContent="×";rem.setAttribute("aria-label",`Remover ${p.name}`);rem.addEventListener("click",()=>removeFromCart(p.id));head.append(txt,rem);
 const row=document.createElement("div");row.className="quantity-row";const controls=document.createElement("div");controls.className="quantity-control";
 const minus=document.createElement("button");minus.className="quantity-button";minus.type="button";minus.textContent="−";minus.addEventListener("click",()=>updateQuantity(p.id,-1));
 const qty=document.createElement("span");qty.className="quantity-value";qty.textContent=quantityLabel(i,p);const plus=document.createElement("button");plus.className="quantity-button";plus.type="button";plus.textContent="+";plus.addEventListener("click",()=>updateQuantity(p.id,1));
 controls.append(minus,qty,plus);const sub=document.createElement("strong");sub.className="item-subtotal";sub.textContent=money(p.price*i.quantity);row.append(controls,sub);card.append(head,row);f.appendChild(card)});
 el.cartItems.appendChild(f);const total=cartTotal(),count=state.cart.length;el.cartCount.textContent=String(count);el.mobileCartCount.textContent=String(count);el.cartTotal.textContent=money(total);el.mobileCartTotal.textContent=money(total);
 el.cartEmpty.hidden=count!==0;el.cartItems.hidden=count===0;el.clearCartButton.hidden=count===0;el.checkoutButton.disabled=count===0;el.checkoutButton.textContent=CONFIG.whatsappNumber?"ENVIAR NO WHATSAPP":"COPIAR PEDIDO";
}
function buildOrderText(){const lines=[`Olá! Gostaria de fazer um pedido na ${CONFIG.storeName}:`,""];state.cart.forEach((i,index)=>{const p=getProduct(i.id);if(!p)return;lines.push(`${index+1}. ${p.name}`,`   Quantidade: ${quantityLabel(i,p)}`,`   Referência: ${priceLabel(p)}`,`   Estimado: ${money(p.price*i.quantity)}`)});lines.push("",`VALOR ESTIMADO: ${money(cartTotal())}`,"Obs.: itens por peso podem variar conforme a pesagem e disponibilidade.");return lines.join("\n")}
async function checkout(){if(!state.cart.length)return;const message=buildOrderText();if(CONFIG.whatsappNumber){window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");return}try{await navigator.clipboard.writeText(message);showToast("PEDIDO COPIADO. AGORA É SÓ COLAR NO WHATSAPP.")}catch{window.prompt("COPIE O PEDIDO ABAIXO:",message)}}
function openCart(){el.drawerBackdrop.hidden=false;el.cartDrawer.classList.add("is-open");el.cartDrawer.setAttribute("aria-hidden","false");document.body.classList.add("drawer-open");setTimeout(()=>el.closeCartButton.focus(),60)}
function closeCart(){el.cartDrawer.classList.remove("is-open");el.cartDrawer.setAttribute("aria-hidden","true");document.body.classList.remove("drawer-open");setTimeout(()=>{el.drawerBackdrop.hidden=true},280)}
function setCategory(c){state.category=c;document.querySelectorAll(".category-tab").forEach(b=>b.classList.toggle("is-active",b.dataset.category===c));renderProducts()}
let toastTimer;function showToast(m){clearTimeout(toastTimer);el.toast.textContent=m;el.toast.classList.add("is-visible");toastTimer=setTimeout(()=>el.toast.classList.remove("is-visible"),2200)}
async function shareCatalog(){const data={title:"Brasa Casa de Carnes",text:"Confira o cardápio digital da Brasa Casa de Carnes.",url:window.location.href};if(navigator.share){try{await navigator.share(data);return}catch(e){if(e.name==="AbortError")return}}try{await navigator.clipboard.writeText(window.location.href);showToast("LINK DO CARDÁPIO COPIADO")}catch{showToast("COPIE O ENDEREÇO DO NAVEGADOR PARA COMPARTILHAR")}}
el.searchInput.addEventListener("input",e=>{state.query=e.target.value;renderProducts()});el.clearSearchButton.addEventListener("click",()=>{state.query="";el.searchInput.value="";el.searchInput.focus();renderProducts()});
el.categoryTabs.addEventListener("click",e=>{const b=e.target.closest(".category-tab");if(b)setCategory(b.dataset.category)});
[el.openCartButton,el.heroCartButton,el.mobileCartButton].forEach(b=>b.addEventListener("click",openCart));el.closeCartButton.addEventListener("click",closeCart);el.drawerBackdrop.addEventListener("click",closeCart);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&el.cartDrawer.classList.contains("is-open"))closeCart()});el.clearCartButton.addEventListener("click",()=>{state.cart=[];saveCart();renderCart();showToast("PEDIDO LIMPO")});
el.checkoutButton.addEventListener("click",checkout);el.shareButton.addEventListener("click",shareCatalog);
el.visualCatalogButton.addEventListener("click",()=>{el.visualSection.hidden=false;el.visualSection.scrollIntoView({behavior:"smooth",block:"start"})});
el.closeVisualCatalogButton.addEventListener("click",()=>{el.visualSection.hidden=true;document.querySelector("#cardapio").scrollIntoView({behavior:"smooth",block:"start"})});
renderProducts();renderCart();
