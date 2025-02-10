import { Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './InfoComponent.module.scss';

type InfoComponentProps = ComponentProps & {
  fields: {
    teachers: Field<number>;
    members: Field<number>;
    courses: Field<number>;
    countries: Field<number>;
    backgroundImage: ImageField;
  };
};

const InfoComponent = ({ fields }: InfoComponentProps): JSX.Element => {
  return (
    <div
      className={styles.infoContainer}
      style={{
        backgroundImage: `url(${fields.backgroundImage?.value?.src})`,
      }}
    >
      <div className="container">
        <div className={styles.infoContainerWrapper}>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2><span className="counter">{fields.teachers?.value}</span>+</h2>
              <h4>Teachers</h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2><span className="counter">{fields.members?.value}</span>+</h2>
              <h4>Members</h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2><span className="counter">{fields.courses?.value}</span>+</h2>
              <h4>Courses</h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2><span className="counter">{fields.countries?.value}</span>+</h2>
              <h4>Countries</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<InfoComponentProps>(InfoComponent);
