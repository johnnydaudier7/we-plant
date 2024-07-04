const FAQs = () => {
    const faqsArticle = [
        {
          h4: 'Do You Offer Plant Delivery?',
          p: 'Absolutely! We provide speedy and reliable plant delivery straight to your doorstep.'
        },
        {
          h4: 'How Do I Care for My Plant?',
          p: 'Each plant comes with a detailed care guide to ensure your green friend gets the love it deserves.'
        },
        {
          h4: 'Can I Return My Plant?',
          p: 'If your plant isn’t thriving within 30 days, we’ll help you find the perfect one free of charge.'
        }
    
      ]
    return (
        <article className='faqs-article'>
            <h3>PLANTS FAQs</h3>
            <div className='faqs-container'>
            {faqsArticle.map((faq, index) => <div key={index} className='faq'>
                <h4>{faq.h4}</h4>
                <p>{faq.p}</p>
            </div>)}
            </div>
        </article>
    )
}
export default FAQs