import {
  ImageField,
  Link,
  Field,
  RichText,
  LinkFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './AboutComponent.module.scss';

type AboutComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    image: ImageField;
    ctaLink: LinkFieldValue;
    imageLeftAlignment: Field<boolean>;
    altText: Field<string>;
  };
};

const AboutComponent = ({ fields }: AboutComponentProps): JSX.Element => {
  console.log('fields.image.value',fields.image.value );
  
  // Determine image URL and fallback
  const imageUrl =
    typeof fields.image.value === 'string'
      ? fields.image.value
      : fields.image.value?.src;

  // Use the altText field if provided; fallback to a default value
  const imageAlt =
    fields.altText && fields.altText.value
      ? fields.altText.value
      : typeof fields.image.value?.alt === 'string'
        ? fields.image.value.alt
        : 'About Image';

  // Determine if image should be left aligned
  const imageLeft = fields.imageLeftAlignment && fields.imageLeftAlignment.value;

  // Define the content blocks
  const textContent = (
    <div className={styles.aboutContainer}>
      <h3>
        <RichText field={fields.heading} />
      </h3>
      <RichText tag="p" field={fields.description} />
      <div>
        <Link field={fields.ctaLink} className="button-default" />
      </div>
    </div>
  );

  const imageContent = (
    <div className={styles.aboutImageArea}>
      {imageUrl && <img src={imageUrl} alt={imageAlt} />}
    </div>
  );
  console.log('imageContent', imageContent);

  return (
    <section className={styles.aboutArea}>
      <div className="container">
        <div className={styles.row}>
          {imageLeft ? (
            // If imageLeftAlignment is true, render the image first
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            // Otherwise, render the text first (default)
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
