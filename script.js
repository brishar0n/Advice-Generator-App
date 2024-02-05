const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
  
    document.querySelector(".advice-id").innerHTML = `Advice #${data.slip.id}`
    document.querySelector(".advice-quote").innerHTML = `"${data.slip.advice}"`
  }
  
  fetchAdvice()