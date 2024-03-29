import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import AxiosNews from "../../api/NewsApi";
import styles from "./NewsStyles.module.scss";
import "./NewsResponsive.module.scss";
import NewItem from "./NewItem";
import Button from "../../component/Button";
import { LoadingCoins, LoadingNew } from "../../component/loading";

const cx = classNames.bind(styles);

function News() {
  const urlImg = [
    "https://thientu.vn/userfiles/files/Cryptocurrency.jpeg",
    "https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg",
    "https://wiki.tino.org/wp-content/uploads/2021/05/h1-7.jpg",
    "https://d1rytvr7gmk1sx.cloudfront.net/wp-content/uploads/2021/05/cryptocurrency-market.jpg",
    "https://images.ctfassets.net/q33z48p65a6w/2fi3pKDcUs07RnA0XXwh8S/7a4259eabc9f8d52eef29e4a47a76104/2202_Crypto_BlogHeader_Types_of_cryptoccurency.png?w=1200&h=645&fit=thumb",
    "https://www.financemagnates.com/wp-content/uploads/2019/04/Bitcoin-going-over-the-moon-.jpg",
    "https://i.insider.com/61433c10f0cb130019e90b34?format=jpeg",
    "https://thumbs.dreamstime.com/z/woman-putting-golden-crypto-coin-purse-laptop-computer-concept-personal-bitcoin-wallet-cryptocurrency-storing-221495005.jpg",
    "https://assets-global.website-files.com/5dcc057f76180bef866afb5d/620cc26efae2e60f41107dc2_icon-designs-pamela-10.png",
  ];
  const [news, setNews] = useState([]);
  const [moreNew, setMoreNew] = useState(6);
  const [loadingCoin, setloadingCoin] = useState(false);
  const [loadingCoin2, setLoadingCoin2] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      const coinNews = await AxiosNews.get();
      const newList = coinNews.slice(0, moreNew);
      setNews(newList);
      setLoadingCoin2(false);
      setloadingCoin(false);
    };
    fetchNews();
  }, [moreNew]);

  const handleLoadingNew = () => {
    setloadingCoin(true);
    setMoreNew((prev) => prev + 3);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("header-news")}>
        <h2>Analysis</h2>
        <h4>
          View in-depth crypto research and discussion articles on our Analysis
          section.
        </h4>
      </div>

      {loadingCoin2 ? (
        <LoadingNew />
      ) : (
        <div className={cx("body-news")}>
          <div className={cx("news-list")}>
            {news?.map((item, index) => {
              return (
                <NewItem
                  img={urlImg[index]}
                  key={index}
                  date={item.date || ""}
                  source={item.source || ""}
                  text={item.description || ""}
                  title={item.title || ""}
                  subject={"Analysis"}
                  url={item.link || ""}
                />
              );
            })}
          </div>
          {loadingCoin ? (
            <LoadingCoins />
          ) : (
            <div onClick={() => handleLoadingNew()}>
              <Button />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default News;
