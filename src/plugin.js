export default {
  // The install method will be called with the Vue constructor as the first argument, along with possible options
  install (Vue, options) {
    printTest(){
      console.log("THE PLUGIN WORKS")
    }
  }
}
