// import { Text, Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ComponentProps } from 'lib/component-props';
// import styles from './InfoComponent.module.scss';

// type InfoComponentProps = ComponentProps & {
//   fields: {
//     teachers: Field<number>;
//     members: Field<number>;
//     courses: Field<number>;
//     countries: Field<number>;
//     backgroundImage: ImageField;
//   };
// };

// const InfoComponent = ({ fields }: InfoComponentProps): JSX.Element => {
//   const backgroundImage =
//     typeof fields.backgroundImage.value === 'string'
//       ? fields.backgroundImage.value
//       : fields.backgroundImage.value?.src;

//   return (
//     <div
//       className={styles.infoContainer}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="container">
//         <div className={styles.infoContainerWrapper}>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter"><Text field={fields.teachers} /></span>+
//               </h2>
//               <h4>Teachers</h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter"><Text field={fields.members} /></span>+
//               </h2>
//               <h4>Members</h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter"><Text field={fields.courses} /></span>+
//               </h2>
//               <h4>Courses</h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter"><Text field={fields.countries} /></span>+
//               </h2>
//               <h4>Countries</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default withDatasourceCheck()<InfoComponentProps>(InfoComponent);


// import { Text, Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ComponentProps } from 'lib/component-props';
// import styles from './InfoComponent.module.scss';
// import { useState, useEffect, useRef } from 'react';

// type InfoComponentProps = ComponentProps & {
//   fields: {
//     teachers: Field<number>;
//     members: Field<number>;
//     courses: Field<number>;
//     countries: Field<number>;
//     backgroundImage: ImageField;
//   };
// };

// const InfoComponent = ({ fields }: InfoComponentProps): JSX.Element => {
//   const backgroundImage =
//     typeof fields.backgroundImage.value === 'string'
//       ? fields.backgroundImage.value
//       : fields.backgroundImage.value?.src;

//   // State to store the current number and visibility status
//   const [teacherCount, setTeacherCount] = useState(0);
//   const [memberCount, setMemberCount] = useState(0);
//   const [courseCount, setCourseCount] = useState(0);
//   const [countryCount, setCountryCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const containerRef = useRef<HTMLDivElement>(null);

//   // Animation logic for counting up with slower speed
//   const animateCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
//     let start = 0;
//     const interval = setInterval(() => {
//       if (start < target) {
//         start += 1;
//         setter(start);
//       } else {
//         clearInterval(interval);
//       }
//     }, 100); // Slower speed, try 100ms or more for a slower animation
//   };

//   // Use the Intersection Observer to detect when the component is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // When the component becomes visible, set isVisible to true and start the animation
//           setIsVisible(true);
//         } else {
//           // When the component is not visible, reset the counter values
//           setTeacherCount(0);
//           setMemberCount(0);
//           setCourseCount(0);
//           setCountryCount(0);
//           setIsVisible(false);
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the component is visible
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   // Trigger the animation only when the component becomes visible
//   useEffect(() => {
//     if (isVisible) {
//       animateCounter(parseInt(fields.teachers.value as unknown as string, 10), setTeacherCount);
//       animateCounter(parseInt(fields.members.value as unknown as string, 10), setMemberCount);
//       animateCounter(parseInt(fields.courses.value as unknown as string, 10), setCourseCount);
//       animateCounter(parseInt(fields.countries.value as unknown as string, 10), setCountryCount);
//     }
//   }, [isVisible, fields]);

//   return (
//     <div
//       ref={containerRef}
//       className={styles.infoContainer}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="container">
//         <div className={styles.infoContainerWrapper}>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter">{teacherCount}</span>+
//               </h2>
//               <h4>
//                 <Text field={fields.teachers} />
//               </h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter">{memberCount}</span>+
//               </h2>
//               <h4>
//                 <Text field={fields.members} />
//               </h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter">{courseCount}</span>+
//               </h2>
//               <h4>
//                 <Text field={fields.courses} />
//               </h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter">{countryCount}</span>+
//               </h2>
//               <h4>
//                 <Text field={fields.countries} />
//               </h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default withDatasourceCheck()<InfoComponentProps>(InfoComponent);
// import { Text, Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ComponentProps } from 'lib/component-props';
// import styles from './InfoComponent.module.scss';
// import { useState, useEffect, useRef } from 'react';

// type InfoComponentProps = ComponentProps & {
//   fields: {
//     teachers: Field<number>;
//     members: Field<number>;
//     courses: Field<number>;
//     countries: Field<number>;
//     backgroundImage: ImageField;
//   };
// };

// const InfoComponent = ({ fields }: InfoComponentProps): JSX.Element => {
//   const backgroundImage =
//     typeof fields.backgroundImage.value === 'string'
//       ? fields.backgroundImage.value
//       : fields.backgroundImage.value?.src;

//   // State to store the current number and visibility status
//   const [teacherCount, setTeacherCount] = useState(0);
//   const [memberCount, setMemberCount] = useState(0);
//   const [courseCount, setCourseCount] = useState(0);
//   const [countryCount, setCountryCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const containerRef = useRef<HTMLDivElement>(null);

//   // Animation logic for counting up with slower speed
//   const animateCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
//     let start = 0;
//     const interval = setInterval(() => {
//       if (start < target) {
//         start += 1;
//         setter(start);
//       } else {
//         clearInterval(interval);
//       }
//     }, 100); // Slower speed, try 100ms or more for a slower animation
//   };

//   // Use the Intersection Observer to detect when the component is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // When the component becomes visible, set isVisible to true and start the animation
//           setIsVisible(true);
//         } else {
//           // When the component is not visible, reset the counter values
//           setTeacherCount(0);
//           setMemberCount(0);
//           setCourseCount(0);
//           setCountryCount(0);
//           setIsVisible(false);
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the component is visible
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   // Trigger the animation only when the component becomes visible
//   useEffect(() => {
//     if (isVisible) {
//       animateCounter(fields.teachers?.value || 0, setTeacherCount); // Use optional chaining and type assertion
//       animateCounter(fields.members?.value || 0, setMemberCount);
//       animateCounter(fields.courses?.value || 0, setCourseCount);
//       animateCounter(fields.countries?.value || 0, setCountryCount);
//     }
//   }, [isVisible, fields.teachers?.value, fields.members?.value, fields.courses?.value, fields.countries?.value]);

//   return (
//     <div
//       ref={containerRef}
//       className={styles.infoContainer}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="container">
//         <div className={styles.infoContainerWrapper}>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter">{teacherCount}</span>+
//               </h2>
//               <h4>Teachers</h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter">{memberCount}</span>+
//               </h2>
//               <h4>Members</h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter">{courseCount}</span>+
//               </h2>
//               <h4>Courses</h4>
//             </div>
//           </div>
//           <div className={styles.infoContainerBox}>
//             <div className={styles.infoContainerContent}>
//               <h2>
//                 <span className="counter">{countryCount}</span>+
//               </h2>
//               <h4>Countries</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default withDatasourceCheck()<InfoComponentProps>(InfoComponent);

import { Text, Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './InfoComponent.module.scss';
import { useState, useEffect, useRef } from 'react';

type InfoComponentProps = ComponentProps & {
  fields: {
    infoBox1Label: Field<string>;
    infoBox1Count: Field<number>;
    infoBox2Label: Field<string>;
    infoBox2Count: Field<number>;
    infoBox3Label: Field<string>;
    infoBox3Count: Field<number>;
    infoBox4Label: Field<string>;
    infoBox4Count: Field<number>;
    backgroundImage: ImageField;
  };
};

const InfoComponent = ({ fields }: InfoComponentProps): JSX.Element => {
  const backgroundImage =
    typeof fields.backgroundImage.value === 'string'
      ? fields.backgroundImage.value
      : fields.backgroundImage.value?.src;

  // State to store the current number and visibility status
  const [infoBox1Count, setInfoBox1Count] = useState(0);
  const [infoBox2Count, setInfoBox2Count] = useState(0);
  const [infoBox3Count, setInfoBox3Count] = useState(0);
  const [infoBox4Count, setInfoBox4Count] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Animation logic for counting up with slower speed
  const animateCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < target) {
        start += 1;
        setter(start);
      } else {
        clearInterval(interval);
      }
    }, 100); // Slower speed, try 100ms or more for a slower animation
  };

  // Use the Intersection Observer to detect when the component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setInfoBox1Count(0);
          setInfoBox2Count(0);
          setInfoBox3Count(0);
          setInfoBox4Count(0);
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Trigger the animation only when the component becomes visible
  useEffect(() => {
    if (isVisible) {
      animateCounter(fields.infoBox1Count?.value || 0, setInfoBox1Count);
      animateCounter(fields.infoBox2Count?.value || 0, setInfoBox2Count);
      animateCounter(fields.infoBox3Count?.value || 0, setInfoBox3Count);
      animateCounter(fields.infoBox4Count?.value || 0, setInfoBox4Count);
    }
  }, [isVisible, fields.infoBox1Count?.value, fields.infoBox2Count?.value, fields.infoBox3Count?.value, fields.infoBox4Count?.value]);

  return (
    <div
      ref={containerRef}
      className={styles.infoContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className={styles.infoContainerWrapper}>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2>
                <span className="counter">{infoBox1Count}</span>+
              </h2>
              <h4><Text field={fields.infoBox1Label} /></h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2>
                <span className="counter">{infoBox2Count}</span>+
              </h2>
              <h4><Text field={fields.infoBox2Label} /></h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2>
                <span className="counter">{infoBox3Count}</span>+
              </h2>
              <h4><Text field={fields.infoBox3Label} /></h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2>
                <span className="counter">{infoBox4Count}</span>+
              </h2>
              <h4><Text field={fields.infoBox4Label} /></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<InfoComponentProps>(InfoComponent);