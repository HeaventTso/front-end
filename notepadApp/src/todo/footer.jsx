import '../assets/styles/footer.styl'

export default {
    data() {
      return {
          author : "v_hhzuho"
      }
    },
    render() {
        return (
            <div id="footer">
                <p>备忘录应用 @Copyright author: {this.author} </p>
            </div>
        )
    }
}