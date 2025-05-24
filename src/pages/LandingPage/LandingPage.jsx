import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import FAQSection from './FaqSection';
import FreeCoursesSection from './FreeCourseSection';
import CommunitySection from './GallerySection';
import GoalsSection from './GoalsSection';
import HeroSection from './HeroSection';
import InstructorSection from './InstructorSection';
import './LandingPage.scss';
import PaidCourseSection from './PaidCourseSection';
import PortfolioSection from './PortfolioSection';
import ReadyToStartSection from './ReadyToStartSection';
import TestimonialsSection from './TestimonialSection';
import WebinarSection from './WebinarSection';

const LandingPage = () => {
  return (
    <div>
      <Navbar user={false} />

      {/* Hero Section */}
      <HeroSection />

      {/* Cards section */}
      <GoalsSection />

      {/* Instructor section */}
      <InstructorSection />

      {/* Courses section */}
      <PaidCourseSection />

      {/* Webinar section */}
      <WebinarSection />

      {/* Portfolio section */}
      <PortfolioSection />

      {/* Free courses section */}
      <FreeCoursesSection />

      {/* Testimonial section */}
      <TestimonialsSection />

      {/* Gallery section */}
      <CommunitySection />

      {/* FAQs section */}
      <FAQSection />

      {/* Ready to start section */}
      <ReadyToStartSection />

      <Footer />
    </div>
  );
};

export default LandingPage;
