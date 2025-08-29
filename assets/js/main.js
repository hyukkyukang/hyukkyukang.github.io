/**
 * Main JavaScript for academic homepage
 * Features: theme toggle, scroll-spy navigation, email obfuscation, smooth scrolling
 * Respects prefers-reduced-motion and provides keyboard accessibility
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Theme Toggle Functionality
   */
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Set initial state
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');

    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggle.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
      }
    });
  }

  /**
   * Scroll Spy Navigation
   */
  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav__link[data-section]');
    const sections = document.querySelectorAll('.section[id]');
    
    if (!navLinks.length || !sections.length) return;

    // Intersection Observer for scroll spy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        const sectionId = entry.target.id;
        const navLink = document.querySelector(`.nav__link[data-section="${sectionId}"]`);
        
        if (entry.isIntersecting) {
          // Remove active class from all nav links
          navLinks.forEach(function(link) {
            link.classList.remove('active');
          });
          
          // Add active class to current nav link
          if (navLink) {
            navLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(function(section) {
      observer.observe(section);
    });
  }

  /**
   * Smooth Scrolling for Anchor Links
   */
  function initSmoothScrolling() {
    if (prefersReducedMotion) return;

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, `#${targetId}`);
          }
        }
      });
    });
  }

  /**
   * Email Obfuscation
   */
  function initEmailObfuscation() {
    const emailButtons = document.querySelectorAll('.email-reveal');
    
    emailButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const user = this.getAttribute('data-user');
        const domain = this.getAttribute('data-domain');
        
        if (user && domain) {
          const email = `${user}@${domain}`;
          
          // Replace button with email link
          const emailLink = document.createElement('a');
          emailLink.href = `mailto:${email}`;
          emailLink.textContent = email;
          emailLink.className = 'email-link';
          
          this.parentNode.replaceChild(emailLink, this);
        }
      });
    });
  }

  /**
   * Back to Top Button
   */
  function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    // Show/hide button based on scroll position
    function toggleBackToTop() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    }

    // Throttled scroll listener
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function() {
          toggleBackToTop();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);

    // Scroll to top on click
    backToTopButton.addEventListener('click', function() {
      if (prefersReducedMotion) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });

    // Initial check
    toggleBackToTop();
  }

  /**
   * Keyboard Navigation Enhancement
   */
  function initKeyboardNavigation() {
    // Add focus-visible polyfill behavior for older browsers
    function addFocusVisiblePolyfill() {
      let hadKeyboardEvent = true;
      const keyboardThrottleTimeout = 100;

      function onPointerDown() {
        hadKeyboardEvent = false;
      }

      function onKeyDown(e) {
        if (e.metaKey || e.altKey || e.ctrlKey) {
          return;
        }
        hadKeyboardEvent = true;
      }

      function onFocus(e) {
        if (hadKeyboardEvent || e.target.matches(':focus-visible')) {
          e.target.classList.add('focus-visible');
        }
      }

      function onBlur(e) {
        e.target.classList.remove('focus-visible');
      }

      document.addEventListener('keydown', onKeyDown, true);
      document.addEventListener('mousedown', onPointerDown, true);
      document.addEventListener('pointerdown', onPointerDown, true);
      document.addEventListener('touchstart', onPointerDown, true);
      document.addEventListener('focus', onFocus, true);
      document.addEventListener('blur', onBlur, true);
    }

    // Only add polyfill if :focus-visible is not supported
    if (!CSS.supports('selector(:focus-visible)')) {
      addFocusVisiblePolyfill();
    }
  }

  /**
   * Performance Optimizations
   */
  function initPerformanceOptimizations() {
    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      
      if (lazyImages.length) {
        const imageObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || img.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        lazyImages.forEach(function(img) {
          imageObserver.observe(img);
        });
      }
    }
  }

  /**
   * Initialize all functionality when DOM is ready
   */
  function init() {
    initThemeToggle();
    initScrollSpy();
    initSmoothScrolling();
    initEmailObfuscation();
    initBackToTop();
    initKeyboardNavigation();
    initPerformanceOptimizations();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Handle page visibility changes for performance
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      // Page is hidden, pause any animations or timers if needed
    } else {
      // Page is visible, resume functionality if needed
    }
  });

})();
