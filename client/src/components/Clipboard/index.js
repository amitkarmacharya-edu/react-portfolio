import React from 'react'

const Clipboard = ({styling, text}) => {

  const fallbackCopyTextToClipboard = (text) => { 
    let textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    let successful;;
    try {
      successful = document.execCommand('copy');
    } catch (err) {
      successful = false;
    }

    document.body.removeChild(textArea);
    return successful;
  }

  const handleClick = async (e) => {
    const imgEle = e.target;
    let css;
    if (!navigator.clipboard) {
      css = fallbackCopyTextToClipboard(text) ? 'copy-success' : 'copy-fail';
    } 
    try {
      await navigator.clipboard.writeText(text)
      css = 'copy-success';
    } catch (e) {
      css = 'copy-fail';
    }
      
    imgEle.classList.add(css);
    setTimeout(() => {
      imgEle.classList.remove(css);
      console.log(e.target)
    },300)
    console.log(e.target)
  }

  return (
    <div style={styling}>
      <img className="clipboard" alt="copy email text to clipboard" src="./assets/images/clipboard.svg" onClick={handleClick}/>
    </div>
  )
}

export default Clipboard
