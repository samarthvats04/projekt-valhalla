import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "../lib/supabase";

function Forum() {
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [tag, setTag] = useState("");
  const [showComments, setShowComments] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Test database connection
  const testConnection = async () => {
    try {
      console.log('Testing database connection...');
      const { data, error, count } = await supabase
        .from('forum_details')
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        console.error('Database connection test failed:', error);
      } else {
        console.log('Database connection successful. Row count:', count);
      }
    } catch (err) {
      console.error('Connection test error:', err);
    }
  };

  // Fetch posts from Supabase
  const fetchPosts = async () => {
    try {
      console.log('Fetching posts...');
      setLoading(true);
      
      const { data, error } = await supabase
        .from('forum_details')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      
      console.log('Posts fetched successfully:', data);
      setPosts(data || []);
    } catch (error) {
      console.error('Fetch posts error:', error);
      alert('Error loading posts: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form submission started');
    console.log('Form data:', formData);
    console.log('Selected tag:', tag);
    
    // Validation
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    if (!formData.message.trim()) {
      alert('Please enter a message');
      return;
    }
    
    if (!tag) {
      alert('Please select a tag');
      return;
    }

    setSubmitting(true);
    
    try {
      const postData = {
        name: formData.name.trim() || 'AnonUser',
        email: formData.email.trim() || '',
        tag: tag,
        comment: formData.message.trim()
      };
      
      console.log('Submitting post data:', postData);
      
      const { data, error } = await supabase
        .from('forum_details')
        .insert([postData])
        .select();
      
      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }
      
      console.log('Post submitted successfully:', data);

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setTag("");
      
      // Refresh posts
      await fetchPosts();
      
      alert('Your post has been submitted successfully!');
    } catch (error) {
      console.error('Submit error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      alert('Error submitting your post: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Format time difference
  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - postTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

  // Get tag color
  const getTagColor = (tagName) => {
    const colors = {
      'Feedback': 'bg-blue-600',
      'Advice': 'bg-purple-600',
      'Suggestion': 'bg-green-600',
      'Other': 'bg-gray-600'
    };
    return colors[tagName] || 'bg-gray-600';
  };

  useEffect(() => {
    console.log('Forum component mounted');
    testConnection();
    fetchPosts();
  }, []);

  return (
    <section id="forum" className="scroll-mt-24 bg-[#000] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden relative">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 opacity-30 sm:opacity-15 md:opacity-20"
        style={{
          backgroundImage: 'url(/assets/forumbgr.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          animation: 'spin 60s linear infinite'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title - Responsive sizing */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 tracking-wide">
          Warrior&apos;s Forum
        </h2>

        {/* Description - Responsive sizing and margins */}
        <p className="text-base sm:text-lg text-gray-300 text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
          This is where warriors gather. Share your battles, your victories, your feedback.<br className="hidden sm:block"/> Your experience shapes what we build next. Real talk only.
        </p>

        {/* Main content - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Form Section - Full width on mobile */}
          <div className="order-1 lg:order-1 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-left">Share Your Journey</h3>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#18181b] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300 text-sm sm:text-base"
                  placeholder="Enter your warrior name"
                  required
                  disabled={submitting}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Email <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#18181b] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                  disabled={submitting}
                />
              </div>

              {/* Tag Dropdown */}
              <div className="relative mb-3 sm:mb-4">
                <label htmlFor="tag" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                  Tag <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => !submitting && setShowTagDropdown(prev => !prev)}
                    disabled={submitting}
                    className="w-full px-3 sm:px-4 py-2 pr-4 border border-gray-600 bg-[#1e1e1e] text-white rounded-md shadow-sm text-left flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    <span>{tag || "Select a tag"}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${showTagDropdown ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {showTagDropdown && !submitting && (
                      <motion.ul
                        key="dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 w-full bg-[#2a2a2a] mt-1 border border-gray-600 rounded-md shadow-lg"
                      >
                        {["Feedback", "Advice", "Suggestion", "Other"].map(option => (
                          <li
                            key={option}
                            onClick={() => {
                              setTag(option);
                              setShowTagDropdown(false);
                            }}
                            className="px-3 sm:px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer text-xs sm:text-sm text-white"
                          >
                            {option}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Message Text Area */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#18181b] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300 resize-vertical text-sm sm:text-base"
                  placeholder="Share your thoughts, questions, or experiences with the Valhalla community..."
                  required
                  disabled={submitting}
                ></textarea>
              </div>

              {/* Submit Button - Responsive sizing */}
              <div className="flex justify-center pt-2 sm:pt-4">
                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-2/3 lg:w-1/2 bg-white text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 hover:bg-gray-200 hover:shadow-[0_0_16px_4px_rgba(255,0,0,0.6)] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {submitting ? 'Submitting...' : 'Submit to Valhalla'}
                </button>
              </div>
            </form>
          </div>

          {/* Comments Section - Full width on mobile, comes after form */}
          <div className="order-2 lg:order-2 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
              <h3 className="text-xl sm:text-2xl font-bold">Community Voices</h3>
              <button
                onClick={() => setShowComments(!showComments)}
                className="bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 flex items-center justify-center sm:justify-start space-x-2 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>{showComments ? "Hide" : "Show"} Comments</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${showComments ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <AnimatePresence>
              {showComments && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 sm:space-y-4 max-h-96 sm:max-h-120 overflow-y-auto custom-scrollbar">
                    {loading ? (
                      <div className="text-center py-6 sm:py-8">
                        <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-white mx-auto"></div>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base">Loading posts...</p>
                      </div>
                    ) : posts.length === 0 ? (
                      <div className="text-center py-6 sm:py-8">
                        <p className="text-gray-400 text-sm sm:text-base px-4">No posts yet. Be the first to share your journey!</p>
                      </div>
                    ) : (
                      posts.map((post) => (
                        <div key={post.id} className="bg-[#18181b] p-3 sm:p-4 rounded-lg border border-gray-700">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center space-x-2 flex-1 min-w-0">
                              <h4 className="font-semibold text-white text-sm sm:text-base truncate">{post.name}</h4>
                              <span className={`text-xs ${getTagColor(post.tag)} text-white px-2 py-1 rounded-full whitespace-nowrap`}>
                                {post.tag}
                              </span>
                            </div>
                            <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{getTimeAgo(post.created_at)}</span>
                          </div>
                          <p className="text-gray-300 text-xs sm:text-sm whitespace-pre-wrap break-words">{post.comment}</p>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forum;