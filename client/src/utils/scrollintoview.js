const scrollRefs = {};

const scrollTo = (ref) => {
  scrollIntoView(scrollRefs[ref]);
}

const scrollIntoView = (ref) => {
 ref.scrollIntoView();
}

const scrollable = (ref) => {
  console.log('scroll refs added');
  console.log(scrollRefs[ref])
}

export { scrollTo, scrollable };