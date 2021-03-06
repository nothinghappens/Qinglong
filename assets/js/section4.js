class Section4 extends React.Component {


  componentDidMount() {
    document.addEventListener('scroll', _.debounce(this.trackScrolling, 100));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  outOfBottom(el) {
    return el.getBoundingClientRect().bottom * 2 < -window.innerHeight / 2;
  }

  trackScrolling = () => {
    const wrappedElement = document.querySelector('.imgBox4');
    const wrappedTitle = document.querySelector('.main_title4')

    if (this.isBottom(wrappedElement)) {
      setTimeout(() => {
        wrappedElement.classList.remove('hidden')
      }, 500)
      wrappedElement.classList.add('bounceIn')
      wrappedTitle.classList.add('animated', 'pulse')

      // document.removeEventListener('scroll', this.trackScrolling);
    }
    if (this.outOfBottom(wrappedElement)) {
      wrappedTitle.classList.remove('animated', 'pulse')
    }
  };


  render() {
    return (
      <section id="goto86230" class="section-base about_us_box background-setting bg_translucent_k"
        style={{ backgroundImage: "url(https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/ca69af713cc179b337563b040b3cd5be_normal.jpg)" }}>
        <div class="ContentsBox clearfix">
          <div class="tBox">
            <h3 class="main_title main_title4"
              style={{ textAlign: "center" }}>
              目前正在各大通路<br />
              熱烈銷售中</h3>
          </div>
          <div class="bBox">
            <div class="imgBox imgBox4 hidden" style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}>
              <amp-img
                src="https://img.holkee.com/site/upload/5d2ed5d8-5550ws3ab-67f7-bfc96146/548e357716f49f3d964de8d75c419e81_normal.jpg"
                width="640" height="350" layout="intrinsic" />
            </div>

            <p class="sub_title"
              style={{ color: "#FFFFFF", textAlign: "center" }}>
              新北市果菜運銷股份有限公司<br />
              台北市農產運銷股份有限公司<br />
              台灣家樂福股份有限公司<br />
              全聯實業股份有限公司<br />
              頂好企業股份有限公司<br />
              惠康百貨股份有限公司<br />
              JASONS Market&nbsp;Place<br />
              遠東百貨CITY SUPER超市<br />
              棉花田生機園地股份有限公司<br />
              沛豐貿易有限公司</p>
          </div>
        </div>
      </section>
    )
  }
}
ReactDOM.render(<Section4 />, document.getElementById("section4"))