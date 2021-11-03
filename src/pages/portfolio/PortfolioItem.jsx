import React,{useState,useEffect} from "react";
import styles from "../styles/portfolioItem.module.css";
import { useParams } from "react-router-dom";
import AppLayoutCarousel from "../partial/AppLayoutCarousel";
import axios from "axios";
 

// export async function getServerSideProps(context) {
//   try {
//     const { id } = context.query;

//     const url = `${process.env.base_url}/api/v1/projects/${id}/details`;

//     const res = await fetch(url);
//     const project = await res.json();

//     if (!project) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: { project }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

const PortfolioItem = () => {
  let { id } = useParams();
  const [project, setProject] = useState({})

  const getServiceDetailList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/projects/${id}/details`,
      });

      setProject(responese.data.data);
   
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceDetailList();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.banner_container_bg}>
        <div className={styles.banner_container}>
          <div className={styles.banner_left_side}>
            <h1>PORTFOLIO</h1>
            <p>
              From idea to a successful product. Based on quality, security and
              high-performance.
            </p>
          </div>
          <div className={styles.banner_right_side}>
            <img
              src="/assets/images/portfolio-illustration.png"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.main_container}`}>
        <div className={`${styles.technology_style}`}>
          {" "}
          <div className={styles.breadcrumb_item}>Portfolio</div>
          <div className={styles.breadcrumb_item} style={{ cursor: "default" }}>
            {">"}
          </div>
          <div className={`${styles.breadcrumb_item} ${styles.breadcrumb_bg}`}>
            {project.title}
          </div>{" "}
        </div>
        <br />
        <div className={`${styles.item_container}`}>
          <div className={styles.item_image_side}>
            <img
              src={project.banner}
              alt=""
              className={styles.item_image}
            />
          </div>
          <div className={styles.item_Detail_side}>
            <div className={styles.item_title}>
              <h2>{project.title}</h2>
              <p className={styles.h5}>{project.description}</p>
            </div>
            <div>
              <h3 className={styles.h3}>{project.client && project.client.company_name}</h3>
              <p className={styles.h5}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam.
              </p>
            </div>
          </div>

          <div className={styles.item_article}>
            <h3 className={styles.h3}>Problem Statement</h3>
            <p className={styles.h5}>{project.solutions}</p>
          </div>

          <div className={styles.item_article}>
            <h3 className={styles.h3}>Solutions</h3>
            <p className={styles.h5}>{project.solutions}</p>
          </div>
          <div
            className={styles.carousel}
            style={{ maxWidth: "100%", marginTop: "20px" }}
          >
            <div>
              <AppLayoutCarousel />
            </div>
          </div>
          <div className={styles.item_article}>
            <h3 className={styles.h3}>Technologies</h3>
            <div className={styles.technology_style}>
              {project.technologies &&
                project.technologies.map((item, i) => (
                  <div className={styles.technology_name} key={i}>
                    {item.name}
                  </div>
                ))}
            </div>
            <div className={styles.item_article}>
              <h3 className={styles.h3}>Available On</h3>
              <div className={styles.technology_style}>
                {project.available_ons &&
                  project.available_ons.map((item, i) => (
                    <div key={i} style={{ marginRight: "20px" }}>
                      <a href={item.link} target="_blank">
                        <img key={i} src={item.logo} alt="" width="100%" />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PortfolioItem;
