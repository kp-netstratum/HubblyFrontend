const Home = () => {
  return (
    <div className="pt-32">
      <div className="flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-start">
          <div className="flex items-center justify-center gap-2 border border-gray-700 rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="text-blue-500"
              viewBox="0 0 24 24"
            >
              <path d="M11.277 2.795l1.179 2.192c.583 1.085 1.473 1.974 2.558 2.558l2.192 1.179c1.017.547 1.017 2.006 0 2.553l-2.192 1.179c-1.085.583-1.974 1.473-2.558 2.558l-1.179 2.192c-.547 1.017-2.006 1.017-2.553 0l-1.179-2.192c-.583-1.085-1.473-1.974-2.558-2.558l-2.192-1.179c-1.017-.547-1.017-2.006 0-2.553l2.192-1.179c1.085-.583 1.974-1.473 2.558-2.558l1.179-2.192C9.27 1.777 10.73 1.777 11.277 2.795zM18.935 15.296l.454.994c.267.585.736 1.054 1.321 1.321l.994.454c.373.17.373.7 0 .87l-.994.454c-.585.267-1.054.736-1.321 1.321l-.454.994c-.17.373-.7.373-.87 0l-.454-.994c-.267-.585-.736-1.054-1.321-1.321l-.994-.454c-.373-.17-.373-.7 0-.87l.994-.454c.585-.267 1.054-.736 1.321-1.321l.454-.994C18.235 14.923 18.765 14.923 18.935 15.296z"></path>
            </svg>
            <div>Welcome to the Colorful World of Events</div>
          </div>
          <div className="text-[350px] font-bold text-blue-500 -translate-y-[100px]">
            Hubbly
          </div>
          <div className="text-3xl text-gray-300 max-w-4xl flex flex-col items-center text-center -mt-20">
            Discover amazing events, connect with like-minded people, and create
            unforgettable experiences. Your next adventure is just a click away.
          </div>
        </div>
        <div
          className="flex items-center justify-center gap-2 mt-20 text-blue-500 animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
        >
          <div className="font-semibold">Scroll</div>
          <div>
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.86541 7.77344C7.11452 8.02254 7.52434 8.02254 7.77345 7.77344L14.202 1.34487C14.4511 1.09576 14.4511 0.685938 14.202 0.43683C13.9529 0.187723 13.5431 0.187723 13.294 0.43683L7.31943 6.41138L1.34487 0.43683C1.09577 0.187723 0.685945 0.187723 0.436838 0.43683C0.187731 0.685938 0.187731 1.09576 0.436838 1.34487L6.86541 7.77344Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Explore",
                description:
                  "Join thousands of event enthusiasts who trust Hubbly to discover and create amazing experiences.",
                link: "/events",
              },
              {
                title: "Create",
                description:
                  "Create your own event and connect with like-minded people.",
                link: "/events/create",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  window.location.href = item.link;
                }}
                className=" cursor-pointer bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-xl p-8 shadow-xl backdrop-blur-lg border border-gray-800 transition-transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
