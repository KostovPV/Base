
import { ImageField, Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './CourseCardComponent.module.scss';

// Import Material Icons
import { People, Favorite, Star, StarHalf } from '@mui/icons-material';

type CourseCardProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    image: ImageField;
    authorName: Field<string>;
    authorImage: ImageField;
    studentCount: Field<number>;
    likes: Field<number>;
    rating: Field<number>;
  };
};

const CourseCardComponent = ({ fields }: CourseCardProps): JSX.Element => {
  const courseImage =
  typeof fields.image.value === 'string'
    ? fields.image.value
    : fields.image.value?.src;

    const authorImg =
    typeof fields.authorImage.value === 'string'
      ? fields.authorImage.value
      : fields.authorImage.value?.src;
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseCardWrapper}>
        {/* Course Image */}
        <div className={styles.courseImage}>
        <a href="/courses-details">   
              <img src={courseImage} alt={"Course image"} />      
          </a>
          <div className={styles.courseHoverInfo}>
            {/* Author Thumbnail */}
            <div className={styles.courseAuthorThumb}>
              
            <img src={authorImg} alt={"Author image"} />      
            
            </div>
            <div>  
              <a href="#">{fields.authorName?.value}</a>           
            </div>
            <div className={styles.courseSeparator}>/</div>
            <div>
              <p>Professor</p>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className={styles.courseCardContent}>
          <h4>
            <a href="/courses-details">{fields.title?.value}</a>
          </h4>
          <Text tag="p" field={fields.description} />

          {/* Course Metadata */}
          <div className={styles.courseMeta}>
            <div className={styles.courseInfo}>
              <span>
                <People className={styles.icon} fontSize="small" /> {fields.studentCount?.value}
              </span>
              <span>
                <Favorite className={styles.icon} fontSize="small" /> {fields.likes?.value}
              </span>
            </div>

            {/* Star Rating */}
            <div className={styles.courseRating}>
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i + 1 <= (fields.rating?.value || 0) ? (
                    <Star className={styles.starIcon} fontSize="small" />
                  ) : (
                    <StarHalf className={styles.starIcon} fontSize="small" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardComponent;
