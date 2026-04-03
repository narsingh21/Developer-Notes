--------------------------------NETFLIX----------------------

Functional Requirements: 
                        - Main Page: contain Promo movie, personal recomendation, popular movies
                        - Video Player, 
                        - Search Bar: search by movie, genres, actor etc.

 
 Non-Functional Requirements:
                         - Support wide Range of Devices.
                         - Perfomance
                         - Security
                         - Accessiblity
                         - Localization
                         - Offline-mode


 Rendering: Rehydration

 API type: Rest and graphQL 

 Type of Streamiing: streaming

 Protocal: HLS/ DASH

 Adaptive Streaming:

 Offline Mode: 
            - store static files js css html in cache( in web workers).
            - media content in index DB.

 PWA(Progressive web application):
 
 Localization:

 Accessibility:

 Support wide range of Devices:

 Perfomance:
         -Network: HTTPS2.0. gzip for binary, Brotli for text, pre-loading data, Lazy-loading.
         -Images: use lazy loading of images(webp +PNG)
         -Video: use addtive bit rate, use webm instead of GIF.
         -css: prefer cass composition animation, use nameing convention BEM,  avoid secondary selector.
         -JS: maintain small bundle size, Don't put heavy Logic.

Security:
       -XSS( Cross side scripting):senetise input, use safe DOM methods, Content security policy, use trusted type.
       -XSRF( Corss side request forgery): CSRF token, same site cookie, check Refer/ origin HTTP header.
       - Prevent click Jacking: x-frame options, HTTP header prevent or limit, use our site as iframe(deny), same origin.
       - Use Encrypted Connection(HTTPS).
       - DRM protection(video protection).
       
    

                                   

                        