const range = document.querySelector('#range-input')
const label_range = document.querySelector('.label-range')
const price_month = document.querySelector('.price-mounth')
const discount_checkbox = document.querySelector('#discount-checkbox')



const pageViews = ['10K','50K','100K','500K','1M']
const price_Month =[8.0, 12.0, 16.0, 24.0, 36.0]

const discount = 25

let active_discount = false;


price_month.innerHTML = price_Month[range.value]

label_range.innerHTML = pageViews[range.value]

range.addEventListener('input',(ev)=>{
   
    
    let price = price_Month[ev.target.value]
    price_month.innerHTML = active_discount ?
    price-price*(discount/100):
    price_Month[ev.target.value]

    label_range.innerHTML = pageViews[ev.target.value]
})



discount_checkbox.addEventListener('click',()=>{
  
    
    active_discount = discount_checkbox.checked

    let price = price_Month[range.value]
    price_month.innerHTML = active_discount ?
    price-price*(discount/100):
    price
})