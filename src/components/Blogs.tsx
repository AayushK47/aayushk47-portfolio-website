import { useHashnodePosts } from '../hooks/useHashnodePosts'
import styles from './Blogs.module.css'

const Blogs = () => {
  // Fetch blog posts using React Query
  const { 
    data: posts, 
    isLoading, 
    error 
  } = useHashnodePosts()

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
  }

  const transformTag = (tag: string) => {
    // Convert to lowercase, then to kebab-case, and add # prefix
    return '#' + tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  if (isLoading) {
    return (
      <section id="blogs" className={styles.blogs}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Blogs</h2>
            <p className="section-subtitle">My thoughts and insights</p>
          </div>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading latest blog posts...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="blogs" className={styles.blogs}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Blogs</h2>
            <p className="section-subtitle">My thoughts and insights</p>
          </div>
          <div className={styles.errorContainer}>
            <p>Unable to load blog posts at the moment.</p>
            <a 
              href="https://aayushkurup.hashnode.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.hashnodeLink}
            >
              Visit my Hashnode blog →
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="blogs" className={styles.blogs}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Blogs</h2>
          <p className="section-subtitle">My thoughts and insights</p>
        </div>
        
        {posts && posts.length > 0 ? (
          <div className={styles.blogsGrid}>
            {posts.map((post) => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.blogImageContainer}>
                  {post.coverImage?.url ? (
                    <img 
                      src={post.coverImage.url} 
                      alt={post.title}
                      className={styles.blogImage}
                    />
                  ) : (
                    <div className={styles.blogImagePlaceholder}>
                      <span>📝</span>
                    </div>
                  )}
                  <div className={styles.blogOverlay}>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.readMoreButton}
                    >
                      Read More
                    </a>
                  </div>
                </div>
                
                <div className={styles.blogContent}>
                  <div className={styles.blogTags}>
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className={styles.blogTag}>
                        {transformTag(tag.name)}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className={styles.blogTitle}>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className={styles.blogExcerpt}>
                    {truncateText(post.brief, 120)}
                  </p>
                  
                  <div className={styles.blogFooter}>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.blogLink}
                    >
                      Read Full Article →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No blog posts available at the moment.</p>
            <a 
              href="https://aayushkurup.hashnode.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.hashnodeLink}
            >
              Visit my Hashnode blog →
            </a>
          </div>
        )}
        
        <div className={styles.blogsFooter}>
          <a 
            href="https://aayushkurup.hashnode.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.viewAllButton}
          >
            View All Posts on Hashnode
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blogs
