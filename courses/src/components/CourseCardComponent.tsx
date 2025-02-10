import { ImageField, Field, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './CourseCardComponent.module.scss';

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

const CourseCardComponent = ({ fields }: CourseCardProps): JSX.Element => (
  <div className={styles.courseCard}>
    <div className={styles.courseCardWrapper}>
      <a href="/courses-details">
        <Image field={fields.image} alt={fields.title?.value} />
      </a>

      <div className={styles.courseAuthorThumb}>
        <Image field={fields.authorImage} alt={fields.authorName?.value} />
      </div>

      <div className={styles.courseCardContent}>
        <h4>
          <a href="/courses-details">{fields.title?.value}</a>
        </h4>
        <Text tag="p" field={fields.description} />

        <div className={styles.courseMeta}>
          <div className={styles.courseInfo}>
            <span>{fields.studentCount?.value} Students</span>
            <span>{fields.likes?.value} Likes</span>
          </div>

          <div className={styles.courseRating}>
            {[...Array(5)].map((_, i) => (
              <i key={i} className={i < (fields.rating?.value || 0) ? 'icon-star' : 'icon-star-half'}></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CourseCardComponent;
