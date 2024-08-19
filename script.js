const cartIcon = document.querySelector("#cart_logo");
const cartBox = document.querySelector(".cart_box");
const qtyLabel = document.querySelector(".qty_label");
const proContainer = document.querySelector(".pro_content");
const emptyCart = document.querySelector(".cart_empty");

//modal
const modalEl = document.querySelector(".modal");
const lImgModal = document.querySelector(".img_thumbanil_modal img");
const sImgModal = document.querySelectorAll(".img_small_modal img");
const prevSvg = document.querySelector(".previous svg");
const nextSvg = document.querySelector(".next svg");

const normalPrice = document.querySelector(".normal_price");
const qty = document.querySelector(".qty_number");
const decr = document.querySelector(".decrememnt");
const incr = document.querySelector(".increment");
const addCart = document.querySelector(".add_cart");

//images
const imgLarge = document.querySelector(".img_thumbanil img");
const thumbImages = document.querySelectorAll(".img_small img");
cartIcon.addEventListener("click", ()=>{
    cartBox.classList.toggle("display");
})

let proPrice = 125.00;
let totalQty = qty.innerHTML;
let totalPrice;

decr.addEventListener('click', ()=>{
    if(totalQty == 1){
        totalQty = 1;
    } else{
        totalQty --;
    }
    totalPrice = proPrice * totalQty;
    normalPrice.textContent = `$${totalPrice}.00`;
    qty.textContent = totalQty;
})
incr.addEventListener('click', ()=>{
    totalQty++;
    totalPrice = proPrice * totalQty;
    normalPrice.textContent = `$${totalPrice}.00`;
    qty.textContent = totalQty;
})
addCart.addEventListener('click', ()=>{
    qtyLabel.style.display = "block";
    qtyLabel.innerHTML = totalQty;
    proContainer.innerHTML = "";
    let html = `<div class="for_flex">
                    <img src="./images/image-product-1-thumbnail.jpg" alt="">
                    <div class="p_details">
                    <p class="pro_text">Fall Limited Edition Sneakers</p>
                    <p class="price">
                        $125.00 <span>x</span> <span class="times">${totalQty}</span>
                        $<span class="total">${totalPrice}</span>
                    </p>
                    </div>
                    <div class="trash">
                    <img src="./images/icon-delete.svg" alt="" class="trash_img">
                    </div>
                </div>
                <div class="checkout_btn">
                  <button>Checkout</button>
                </div>`;
    proContainer.insertAdjacentHTML('afterbegin', html);
    emptyCart.innerHTML = "";
    document.querySelector(".trash_img").addEventListener("click", ()=>{
        emptyCart.innerHTML = "Your cart is empty.";
        proContainer.innerHTML = "";
        qtyLabel.style.display = "none";
    })
})
thumbImages.forEach((img, indx)=>{
    indx++;
    img.addEventListener("click", (e)=>{
        imgLarge.src = `./images/image-product-${indx}.jpg`;
        thumbImages.forEach((thumb) => thumb.classList.remove("active"));
        img.classList.add("active");  
    })
})
imgLarge.addEventListener("click", ()=>{
    modalEl.style.display = "block";
    document.querySelector(".svg_close").addEventListener("click", ()=>{
        modalEl.style.display = "none";
    })
})

sImgModal.forEach((mimg, indx)=>{
    indx++;
    mimg.addEventListener("click", (e)=>{
        lImgModal.src = `./images/image-product-${indx}.jpg`;
        sImgModal.forEach((img) => img.classList.remove("active"));
        mimg.classList.add("active");  
    })
})

nextSvg.addEventListener("click", (e)=>{
    
})
prevSvg.addEventListener("click", (e)=>{
    indx--;
    lImgModal.src = `./images/image-product-${indx}.jpg`;
    // sImgModal.forEach((img) => img.classList.remove("active"));
    // mimg.classList.add("active"); 
})