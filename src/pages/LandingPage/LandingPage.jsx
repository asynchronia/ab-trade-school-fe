import { useState } from 'react';
import bg1 from '../../assets/bg1.svg';
import bg2 from '../../assets/bg2.svg';
import bg3 from '../../assets/bg3.svg';
import cardImage1 from '../../assets/cardImg1.svg';
import cardImage2 from '../../assets/cardImg2.svg';
import cardImage3 from '../../assets/cardImg3.svg';
import cardImage4 from '../../assets/cardImg4.svg';
import cardImage5 from '../../assets/cardImg5.svg';
import freeCard1 from '../../assets/freeCard1.svg';
import freeCard2 from '../../assets/freeCard2.svg';
import freeCard3 from '../../assets/freeCard3.svg';
import heroSectionImg from '../../assets/heroSectionImg.svg';
import leftCircle from '../../assets/leftCircle.svg';
import person1 from '../../assets/person1.svg';
import person2 from '../../assets/person2.svg';
import person3 from '../../assets/person3.svg';
import rightCircle from '../../assets/rightCircle.svg';
import Navbar from '../../components/Navbar/Navbar';
import TrackCard from '../../components/TrackCard/TrackCard';
import './LandingPage.scss';

const statsItem = [
  { number: '20+', label: 'Modules' },
  { number: '1M+', label: 'Learners' },
  { number: '0', label: 'Course Fee' },
];

const features = [
  { label: 'NISM-Backed', dotClass: 'dot--blue' },
  { label: 'NSE Partnership', dotClass: 'dot--blue' },
  { label: '#1 on TradingView', dotClass: 'dot--blue' },
  { label: 'SEBI Compliant', dotClass: 'dot--blue' },
  { label: '4.9/5 Rating', dotClass: 'dot--yellow' },
];

const trackData = [
  {
    title: 'Beginner',
    description:
      'Master the fundamentals of trading and markets. Perfect for newcomers.',
    buttonText: 'Explore Track',
    icon: cardImage1,
  },
  {
    title: 'Options',
    description:
      'Learn strategies for options trading, from basics to advanced techniques.',
    buttonText: 'Explore Track',
    icon: cardImage2,
  },
  {
    title: 'Futures',
    description:
      'Master futures trading with risk management and strategic execution.',
    buttonText: 'Explore Track',
    icon: cardImage3,
  },
  {
    title: 'Algo Trading',
    description:
      'Build automated trading systems with code and quantitative strategies.',
    buttonText: 'Explore Track',
    icon: cardImage4,
  },
  {
    title: 'Strategy Builder',
    description:
      'Create custom trading strategies and learn portfolio management.',
    buttonText: 'Explore Track',
    icon: cardImage5,
  },
];

const instructors = [
  {
    name: 'Nirakar Rajeshkumar Rathod',
    role: 'Technical Analyst',
    badge: 'Fundamental Analysis',
    description:
      'Master technical indicators, sentiment, breakouts, strategies, F&O, portfolio analysis',
    rating: 4.9,
    reviews: 328,
    bgImage: bg1,
    personImage: person1,
  },
  {
    name: 'Anish Kumar',
    role: 'Technical Analyst',
    badge: 'Technical Analysis',
    description:
      'Analyze charts, track sentiment, spot breakouts, and build F&O portfolios.',
    rating: 4.8,
    reviews: 256,
    bgImage: bg2,
    personImage: person2,
  },
  {
    name: 'Rupesh Chidharala',
    role: 'Research Analyst',
    badge: 'Technical Analysis',
    description:
      'Learn fundamentals, options trading, scalping, hedging, and price action.',
    rating: 4.9,
    reviews: 412,
    bgImage: bg3,
    personImage: person3,
  },
];

const levels = ['Beginner', 'Intermediate', 'Advanced'];

const languages = [
  'Hindi',
  'English',
  'Bengali',
  'Kannada',
  'Malayalam',
  'Tamil',
  'Telugu',
  'Marathi',
];

const paidCourses = [
  {
    id: 1,
    image: '/path-to-image1.jpg',
    title: 'Trading View Tools',
    level: 'Beginner',
    language: 'English',
  },
  {
    id: 2,
    image: '/path-to-image2.jpg',
    title: 'Option Hedging',
    level: 'Intermediate',
    language: 'English',
  },
];

const freeCourses = [
  {
    id: 1,
    image: freeCard1,
    title:
      'Introduction to Trading Introduction to Trading Introduction to Trading',
    desc: 'Introduction to Trading Introduction to Trading Introduction to Introduction to Trading trading......',
    time: '1 hr',
  },
  {
    id: 2,
    image: freeCard2,
    title:
      'Introduction to Trading Introduction to Trading Introduction to Trading',
    desc: 'Introduction to Trading Introduction to Trading Introduction to Introduction to Trading trading......',
    time: '1 hr',
  },
  {
    id: 3,
    image: freeCard3,
    title:
      'Introduction to Trading Introduction to Trading Introduction to Trading',
    desc: 'Introduction to Trading Introduction to Trading Introduction to Introduction to Trading trading......',
    time: '1 hr',
  },
];

const LandingPage = () => {
  //   const [selectedLevel, setSelectedLevel] = useState('Beginner');
  //   const [selectedLanguage, setSelectedLanguage] = useState('English');
  //   const [isLevelOpen, setIsLevelOpen] = useState(false);
  //   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  return (
    <div>
      <Navbar user={false} />

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={leftCircle}
          alt="Decorative circle"
          className="left-circle circle"
        />

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Learn the Markets.
              <br />
              Master the Moves.
              <br />
              Trade Like You Mean It.
            </h1>

            <p className="hero-subtitle">
              Learn from industry professionals with real-world case studies and
              practical strategies that work in today's markets.
            </p>

            <button className="cta-button">Start Learning Now</button>

            <div className="stats-container">
              {statsItem.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right-section">
            <img
              src={heroSectionImg}
              alt="Hero illustration"
              className="hero-image"
            />
            <div className="live-event">
              <span className="event-tag">Trading market insights</span>
              <span className="event-time">live on 20/06/2025 | 12:00PM</span>
            </div>
          </div>
        </div>

        <img
          src={rightCircle}
          alt="Decorative circle"
          className="right-circle circle"
        />
      </section>

      {/* Cards section */}
      <section className="track-section">
        <div className="track-section__header">
          <h2>Your Goals. Your Track.</h2>
          <p>
            Get on the fast track to smarter trading with learning paths built
            around your needs. Practical, structured, and guided by real-market
            expertise.
          </p>
        </div>

        <div className="track-section__features">
          {features.map((feature, idx) => (
            <div className="feature-badge" key={idx}>
              <span className={`dot ${feature.dotClass}`} />
              {feature.label}
            </div>
          ))}
        </div>

        <div className="track-section__cards">
          {trackData.map((item, index) => (
            <TrackCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Instructor section */}
      <section className="instructor-section">
        <div className="instructor-section__header">
          <h2>Learn from the Best</h2>
          <p>
            Our instructors are seasoned market professionals with years of
            real-world trading experience.
          </p>
        </div>
        <div className="instructor-section__cards">
          {instructors.map((instructor, idx) => (
            <div className="instructor-card" key={idx}>
              <div className="instructor-card__top">
                <img
                  src={instructor.bgImage}
                  alt="Background"
                  className="bg-img"
                />
                <img
                  src={instructor.personImage}
                  alt={instructor.name}
                  className="person-img"
                />
                <span className="instructor-card__badge">
                  {instructor.badge}
                </span>
              </div>
              <div className="instructor-card__bottom">
                <h3>{instructor.name}</h3>
                <p className="role">{instructor.role}</p>
                <p className="desc">{instructor.description}</p>
                <div className="rating">
                  {'★'.repeat(Math.floor(instructor.rating))}
                  <span className="rating-score">
                    &nbsp;{instructor.rating} ({instructor.reviews} reviews)
                  </span>
                </div>
                <a className="profile-link" href="#">
                  View Profile & Courses
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses section
      <section className="courses-section">
        <div className="section-header">
          <h1>Master the Markets</h1>
          <p>Unlock your trading potential with trade school</p>
        </div>

        <div className="filters-container">
          <div className="filter-group">
            <button
              className="filter-button"
              onClick={() => setIsLevelOpen(!isLevelOpen)}
            >
              Level: {selectedLevel} ▼
            </button>
            {isLevelOpen && (
              <div className="dropdown-menu">
                {levels.map((level) => (
                  <div
                    key={level}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedLevel(level);
                      setIsLevelOpen(false);
                    }}
                  >
                    {level}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="filter-group">
            <button
              className="filter-button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              Language: {selectedLanguage} ▼
            </button>
            {isLanguageOpen && (
              <div className="dropdown-menu">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedLanguage(language);
                      setIsLanguageOpen(false);
                    }}
                  >
                    {language}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="see-all-button">See All</button>
        </div>

        <div className="courses-grid">
          {paidCourses.map((course) => (
            <div key={course.id} className="course-item">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <div className="course-info">
                <h3>{course.title}</h3>
                <span>
                  {course.level} - {course.language}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Free courses section */}
      <section className="expert-courses">
        <div className="header">
          <h2>
            Get Started with <span>Free Expert Courses</span>
          </h2>
          <p>
            Explore easy-to-follow courses designed to get you started right.
          </p>
        </div>

        <div className="courses">
          {freeCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="image">
                <img src={course.image} alt="Course" />
                <span className="bookmark">🔖</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="footer">
                <button>WATCH NOW</button>
                <div className="time">
                  <span>⏰</span>
                  <span>{course.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
