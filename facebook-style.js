document.addEventListener('DOMContentLoaded', () => {
    // Add fun animations and interactivity to the page
    
    // Animate logo on click
    const logo = document.querySelector('.logo h1');
    logo.addEventListener('click', () => {
        logo.style.transform = 'scale(1.2) rotate(5deg)';
        setTimeout(() => {
            logo.style.transform = '';
        }, 500);
    });
    
    // Make posts interactive
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        // Like functionality
        const likeButton = post.querySelector('.post-actions .post-action:first-child');
        const likeCount = post.querySelector('.post-reactions span');
        
        let liked = false;
        let count = parseInt(likeCount.textContent.split(' ')[1]);
        
        likeButton.addEventListener('click', () => {
            liked = !liked;
            
            if (liked) {
                likeButton.style.color = '#1877f2';
                likeButton.style.fontWeight = 'bold';
                count++;
            } else {
                likeButton.style.color = '';
                likeButton.style.fontWeight = '';
                count--;
            }
            
            likeCount.innerHTML = `<i class="fas fa-thumbs-up"></i> ${count}`;
            
            // Add heart animation when liking
            if (liked) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '❤️';
                heart.style.position = 'absolute';
                heart.style.left = `${Math.random() * 80 + 10}%`;
                heart.style.top = '50%';
                heart.style.fontSize = '24px';
                heart.style.animation = 'float-up 1.5s ease-out forwards';
                post.appendChild(heart);
                
                setTimeout(() => {
                    post.removeChild(heart);
                }, 1500);
            }
        });
        
        // Comment placeholder functionality
        const commentButton = post.querySelector('.post-actions .post-action:nth-child(2)');
        commentButton.addEventListener('click', () => {
            // Create a simple comment input if it doesn't exist
            if (!post.querySelector('.comment-input')) {
                const commentSection = document.createElement('div');
                commentSection.className = 'comment-section';
                commentSection.innerHTML = `
                    <div class="comment-input">
                        <img src="https://picsum.photos/id/64/40/40" alt="Your Profile">
                        <input type="text" placeholder="Write a comment...">
                        <button>Post</button>
                    </div>
                `;
                
                // Style the comment section
                commentSection.style.padding = '8px 16px';
                commentSection.style.borderTop = '1px solid #ced0d4';
                
                const commentInput = commentSection.querySelector('.comment-input');
                commentInput.style.display = 'flex';
                commentInput.style.alignItems = 'center';
                commentInput.style.gap = '8px';
                
                const img = commentInput.querySelector('img');
                img.style.width = '32px';
                img.style.height = '32px';
                img.style.borderRadius = '50%';
                
                const input = commentInput.querySelector('input');
                input.style.flex = '1';
                input.style.border = 'none';
                input.style.outline = 'none';
                input.style.backgroundColor = '#f0f2f5';
                input.style.padding = '8px 12px';
                input.style.borderRadius = '20px';
                
                const button = commentInput.querySelector('button');
                button.style.backgroundColor = '#1877f2';
                button.style.color = 'white';
                button.style.border = 'none';
                button.style.borderRadius = '4px';
                button.style.padding = '4px 8px';
                button.style.cursor = 'pointer';
                
                post.appendChild(commentSection);
                
                // Focus the input
                input.focus();
                
                // Handle post button click
                button.addEventListener('click', () => {
                    if (input.value.trim()) {
                        const commentsList = post.querySelector('.comments-list') || document.createElement('div');
                        if (!post.querySelector('.comments-list')) {
                            commentsList.className = 'comments-list';
                            commentsList.style.padding = '8px 0';
                            post.appendChild(commentsList);
                        }
                        
                        const newComment = document.createElement('div');
                        newComment.className = 'comment';
                        newComment.innerHTML = `
                            <img src="https://picsum.photos/id/64/40/40" alt="Your Profile">
                            <div class="comment-content">
                                <p class="comment-author">Your Name</p>
                                <p class="comment-text">${input.value}</p>
                            </div>
                        `;
                        
                        newComment.style.display = 'flex';
                        newComment.style.alignItems = 'flex-start';
                        newComment.style.gap = '8px';
                        newComment.style.margin = '8px 0';
                        
                        const commentImg = newComment.querySelector('img');
                        commentImg.style.width = '32px';
                        commentImg.style.height = '32px';
                        commentImg.style.borderRadius = '50%';
                        
                        const commentContent = newComment.querySelector('.comment-content');
                        commentContent.style.backgroundColor = '#f0f2f5';
                        commentContent.style.padding = '8px 12px';
                        commentContent.style.borderRadius = '18px';
                        
                        const commentAuthor = newComment.querySelector('.comment-author');
                        commentAuthor.style.fontWeight = 'bold';
                        commentAuthor.style.fontSize = '0.8rem';
                        
                        const commentText = newComment.querySelector('.comment-text');
                        commentText.style.fontSize = '0.9rem';
                        
                        commentsList.appendChild(newComment);
                        
                        // Update comment count
                        const commentCount = post.querySelector('.post-comments-shares span:first-child');
                        const currentCount = parseInt(commentCount.textContent.split(' ')[0]) || 0;
                        commentCount.textContent = `${currentCount + 1} comments`;
                        
                        // Clear input
                        input.value = '';
                    }
                });
                
                // Submit on enter
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        button.click();
                    }
                });
            }
        });
    });
    
    // Create Story button interaction
    const createStory = document.querySelector('.create-story');
    createStory.addEventListener('mouseenter', () => {
        createStory.style.transform = 'scale(1.05)';
        createStory.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    
    createStory.addEventListener('mouseleave', () => {
        createStory.style.transform = '';
        createStory.style.boxShadow = '';
    });
    
    // Animate notifications icon with a pulse effect
    const notificationIcon = document.querySelector('.nav-icons .icon:nth-child(5)');
    function pulseNotification() {
        notificationIcon.style.transform = 'scale(1.2)';
        notificationIcon.style.backgroundColor = '#e4101b20';
        
        setTimeout(() => {
            notificationIcon.style.transform = '';
            notificationIcon.style.backgroundColor = '';
        }, 1000);
    }
    
    // Pulse the notification every 10 seconds
    pulseNotification();
    setInterval(pulseNotification, 10000);
    
    // Make the post creation interactive
    const postInput = document.querySelector('.create-post-header input');
    const postActions = document.querySelector('.create-post-actions');
    
    postInput.addEventListener('focus', () => {
        postInput.style.backgroundColor = 'white';
        postInput.style.boxShadow = '0 0 0 2px rgba(24, 119, 242, 0.2)';
        
        // Make actions more visible
        postActions.style.opacity = '1';
    });
    
    postInput.addEventListener('blur', () => {
        postInput.style.backgroundColor = '';
        postInput.style.boxShadow = '';
        
        // Keep actions visible if there's text
        if (!postInput.value) {
            postActions.style.opacity = '0.8';
        }
    });
    
    // Add floating animation to the CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            0% {
                transform: translateY(0) scale(0.2);
                opacity: 0;
            }
            20% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) scale(1.5);
                opacity: 0;
            }
        }
        
        .post-content img {
            transition: transform 0.3s;
        }
        
        .post-content img:hover {
            transform: scale(1.02);
        }
        
        .nav-icons .icon {
            transition: all 0.3s;
        }
        
        .post-action {
            transition: all 0.2s;
        }
        
        .post-action:active {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
    
    // Add random emoji reactions when hovering over the reactions
    const reactions = document.querySelectorAll('.post-reactions');
    const emojis = ['👍', '❤️', '😂', '😮', '😢', '😡'];
    
    reactions.forEach(reaction => {
        reaction.addEventListener('mouseenter', () => {
            const emojiContainer = document.createElement('div');
            emojiContainer.className = 'emoji-reaction';
            emojiContainer.style.position = 'absolute';
            emojiContainer.style.top = '-30px';
            emojiContainer.style.left = '0';
            emojiContainer.style.backgroundColor = 'white';
            emojiContainer.style.borderRadius = '20px';
            emojiContainer.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
            emojiContainer.style.padding = '5px 10px';
            emojiContainer.style.display = 'flex';
            emojiContainer.style.gap = '5px';
            emojiContainer.style.zIndex = '10';
            
            // Add emojis
            emojis.forEach(emoji => {
                const emojiSpan = document.createElement('span');
                emojiSpan.textContent = emoji;
                emojiSpan.style.fontSize = '1.2rem';
                emojiSpan.style.cursor = 'pointer';
                emojiSpan.style.transition = 'transform 0.2s';
                
                emojiSpan.addEventListener('mouseenter', () => {
                    emojiSpan.style.transform = 'scale(1.5)';
                });
                
                emojiSpan.addEventListener('mouseleave', () => {
                    emojiSpan.style.transform = '';
                });
                
                emojiContainer.appendChild(emojiSpan);
            });
            
            reaction.style.position = 'relative';
            reaction.appendChild(emojiContainer);
        });
        
        reaction.addEventListener('mouseleave', () => {
            const emojiContainer = reaction.querySelector('.emoji-reaction');
            if (emojiContainer) {
                reaction.removeChild(emojiContainer);
            }
        });
    });
    
    // Simulate a notification after 5 seconds
    setTimeout(() => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <img src="https://picsum.photos/id/1012/40/40" alt="User">
                <p><strong>Alex Johnson</strong> commented on your post.</p>
                <span class="notification-close">×</span>
            </div>
        `;
        
        // Style notification
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'white';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        notification.style.zIndex = '1000';
        notification.style.animation = 'slide-in 0.5s forwards';
        
        const notificationContent = notification.querySelector('.notification-content');
        notificationContent.style.display = 'flex';
        notificationContent.style.alignItems = 'center';
        notificationContent.style.padding = '12px';
        notificationContent.style.gap = '10px';
        
        const notificationImg = notification.querySelector('img');
        notificationImg.style.width = '40px';
        notificationImg.style.height = '40px';
        notificationImg.style.borderRadius = '50%';
        
        const notificationClose = notification.querySelector('.notification-close');
        notificationClose.style.marginLeft = 'auto';
        notificationClose.style.fontSize = '1.5rem';
        notificationClose.style.cursor = 'pointer';
        notificationClose.style.color = '#65676b';
        
        // Add animation
        const notificationStyle = document.createElement('style');
        notificationStyle.textContent = `
            @keyframes slide-in {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slide-out {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(notificationStyle);
        
        // Close notification
        notificationClose.addEventListener('click', () => {
            notification.style.animation = 'slide-out 0.5s forwards';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.animation = 'slide-out 0.5s forwards';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 500);
            }
        }, 5000);
        
        document.body.appendChild(notification);
        
        // Also update the notification icon
        const notificationBadge = document.createElement('span');
        notificationBadge.className = 'notification-badge';
        notificationBadge.textContent = '1';
        notificationBadge.style.position = 'absolute';
        notificationBadge.style.top = '0';
        notificationBadge.style.right = '0';
        notificationBadge.style.backgroundColor = '#e41e3f';
        notificationBadge.style.color = 'white';
        notificationBadge.style.borderRadius = '50%';
        notificationBadge.style.width = '18px';
        notificationBadge.style.height = '18px';
        notificationBadge.style.fontSize = '0.7rem';
        notificationBadge.style.display = 'flex';
        notificationBadge.style.alignItems = 'center';
        notificationBadge.style.justifyContent = 'center';
        notificationBadge.style.fontWeight = 'bold';
        
        notificationIcon.style.position = 'relative';
        notificationIcon.appendChild(notificationBadge);
        
        // Make notification clickable
        notificationIcon.addEventListener('click', () => {
            if (notificationIcon.contains(notificationBadge)) {
                notificationIcon.removeChild(notificationBadge);
            }
        });
    }, 5000);
});