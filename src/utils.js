


export const analyze =(text,cart,total) =>{
    const Total =JSON.stringify(total);
    
    console.log(Total)
    if(text.includes('hi') || text.includes('hey') || text.includes('hello'))
        return 'Hi, How can i help you' 
    else if(text.includes('want to buy')|| text.includes('i need ') )
        return 'The product will be available in the store,Go to Home page and search for the product'
    else if(text.includes('Refund Policy'))
        return " If you've received a product in a damaged/defective condition, you can contact us within 10 days from the delivery of the product."
    else if(text.includes('order amount') || text.includes('cart total')|| text.includes('total amount') )
        return Total
    else if(text.includes('return'))
        return "Return orders are taken afer 3-5 days of delivery , place the return order in My Orders"
    else if(text.includes('thankyou') || text.includes('bye') )
        return "thank you , visit our store again"
    else if(text.includes('contact') || text.includes('more enquiry') || text.includes('not satisfied'))
        return "Kindly contact customer support for clarity, customer Support : mail to: shyamramesh2002@gmail.com"
    return " oops could not understand the text"
}