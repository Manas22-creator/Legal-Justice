// src/pages/Blog.jsx
import React, { useState } from 'react';


// Import Common Components
import Hero from '../components/common/Hero';
import CTASection from '../components/common/CTASection';
import SectionTitle from '../components/common/SectionTitle';

// Import Blog-Specific Components
import FeaturedArticle from '../components/blog/FeaturedArticle';
import BlogCard from '../components/blog/BlogCard';
import FilterControls from '../components/testimonials/FilterControls'; // Reusing this component!

// Import Assets
import blogHero from '../assets/images/blog-hero.jpg';
import blogFeatured from '../assets/images/blog-featured.jpg';
import blogArrest from '../assets/images/blog-arrest.jpg';
import blogCustody from '../assets/images/blog-custody.jpeg';
import blogBusiness from '../assets/images/blog-business.jpeg';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const featuredArticleData = {
    image: blogFeatured,
    tag: 'Civil Law',
    title: 'Understanding Your Rights in Personal Injury Cases',
    description: 'Discover the essential rights you have when pursuing a personal injury claim and how to navigate the legal process effectively. This article covers statutes of limitations, evidence gathering, and dealing with insurance companies.',
    author: 'John Mitchell',
    date: 'December 15, 2024',
    readTime: '7 min',
    linkTo: '#'
  };
  
  const recentArticlesData = [
    { image: blogArrest, tag: 'Criminal Defense', category: 'criminal', title: 'What to Do When Arrested', description: 'An essential guide on your rights during an arrest and the immediate steps to take.', date: 'Dec 12, 2024', linkTo: '#' },
    { image: blogCustody, tag: 'Family Law', category: 'family', title: 'Child Custody Laws: A Guide', description: 'Navigate the complexities of child custody arrangements with insights on what courts determine.', date: 'Dec 10, 2024', linkTo: '#' },
    { image: blogBusiness, tag: 'Corporate Law', category: 'corporate', title: 'Business Formation: Choosing Your Structure', description: 'Explore business entity types and learn how to select the optimal one for your company.', date: 'Dec 8, 2024', linkTo: '#' },
    { image: blogArrest, tag: 'Civil Law', category: 'civil', title: 'Navigating Small Claims Court', description: 'A step-by-step guide to filing and winning a case in small claims court without a lawyer.', date: 'Dec 5, 2024', linkTo: '#' },
  ];
  
  const filterCategories = ['all', 'civil', 'criminal', 'family', 'corporate'];
  
  const filteredArticles = recentArticlesData.filter(article =>
    activeFilter === 'all' || article.category === activeFilter
  );

  return (
    <>
    
        <title>Blog & Legal Insights - LegalAdvocate</title>
        <meta name="description" content="Stay informed with expert analysis, case updates, and practical guidance from the attorneys at LegalAdvocate." />
    
      
      <Hero
        title="Legal Insights & News"
        subtitle="Stay informed with our expert analysis, case updates, and practical guidance across various areas of law. Knowledge is your best defense."
        bgImage={blogHero}
      />
      
      <section className="section section-light">
        <div className="container">
          <SectionTitle title="Featured Article" />
          <FeaturedArticle article={featuredArticleData} />

          <div style={{ marginTop: '80px' }}>
            <SectionTitle title="Recent Articles" subtitle="Browse our latest legal insights and practical guidance." />
          </div>
          
          <FilterControls 
            categories={filterCategories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          
          <div className="card-grid">
            {filteredArticles.map((article, index) => (
              <BlogCard key={index} article={article} />
            ))}
          </div>
        </div>
      </section>
      
      <CTASection
        title="Need Legal Advice?"
        subtitle="Our knowledgeable attorneys are here to help with personalized guidance. Schedule a consultation to discuss your specific situation."
        primaryBtnText="Schedule Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="View Our Experts"
        secondaryBtnLink="/team"
      />
    </>
  );
};

export default Blog;