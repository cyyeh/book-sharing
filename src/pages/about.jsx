import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const boldStyle = {
  "font-weight": "bold",
  color: "orange"
};

const redFont = {
  color: "red"
};

const About = center => (
  <Layout>
    <Helmet title={'好書推薦網 | 了解更多'} />
    <Header title="了解更多">好書推薦網如何運作</Header>
    <Container>
      <h3>
        在這裡我只有一個重大任務要做，那就是<span style={boldStyle}>推薦好書</span>。
      </h3>
      <h3>
        對我來說，所謂的好書必須具備至少以下其中一點：<span style={boldStyle}>給予我新穎的觀點去了解世界；提出實際的方法去改善我目前的生活；提升我的能力</span>。所以，從以上敘述大家便不難理解我不太會推薦小說，除非我認為它真真切切地構成了「好書」的條件。
      </h3>
      <h3>
        曾經我以為書不需要親自讀過，只要讀讀大家所寫的重點就行。但後來我改變想法了，我認為讀過別人所寫的重點頂多也只是用別人的視角去揣摩事情，永遠不會是自己的角度。所以，書還是要透過自己去讀去體會。另外，時常重點的分享固然是重點，但內容過於生硬，不帶感情，讀過容易就忘了。然而，書裡頭通常會有很多生動的故事，這些是作者寫來要給予大家深刻的印象並印證作者的觀點用。若大家沒有親自去讀過，自然少了那層深刻的體悟。
      </h3>
      <h3>
        綜合以上所述，在這裡我不會囉唆地將我認為的重點一一寫下，強迫您用我的觀點去理解每本書。相反的，我會有一個很簡單的架構去描述每本書帶給我的精髓，然後把讀書的選擇權交還給讀者您。每篇文章會有四大重點：
        <br/><br/>
        <ol>
          <li><span style={boldStyle}>為何我推薦這本書？</span>：我會簡單扼要描述它吸引我的理由並且清楚說明它符合我所謂好書的條件在哪。</li>
          <li><span style={boldStyle}>這本書啟發了我什麼？</span>：讀完一本書若能有所啟發，那便是最大的禮物，而且是一輩子受用無盡的。</li>
          <li><span style={boldStyle}>參考資源</span>：這裡我會羅列相關文章或影片讓大家可以有更多的角度去了解這本書。</li>
          <li><span style={boldStyle}>邀您來讀</span>：這裡我會羅列各式各樣的購買連結，正所謂貨比三家不吃虧。</li>
        </ol>
      </h3>
      <h3>
        我真心企盼這個網站可以成為一盞明燈，指引您從茫茫書海中找到好書；只要這些書真正能夠啟發您什麼，我就心滿意足了！
      </h3>
      <hr/>
      <h4 style={redFont}>
        老實話大聲說！
      </h4>
      <h3>
        讀到這裡，您可能會心生懷疑，為何我會那麼好心跟大家推薦這些書呢？難道我閒閒沒事做？不瞞您說，這是我踏入聯盟行銷的第一次嘗試，也就是說當您透過購買連結去買書時，我可以從這些書商取得微薄的佣金當作酬勞。然而，誠實的我跟大家說，其實不是所有購買連結都能讓我取得佣金(TAAZE及Google Play Books)。然而，我想秉持著良善的出發點我還是將我平常會去光顧的幾個書店提供給大家自行選擇，如果到時網站還是經營不下去，那就再說囉......
      </h3>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
