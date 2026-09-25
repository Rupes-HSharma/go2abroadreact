import { useEffect, useState } from "react";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");

function CourseCard({ course, delay }) {
  const highlights = (course.highlights || "")
    .split("\n")
    .map((highlight) => highlight.trim())
    .filter(Boolean);

  return (
    <div className="col-lg-4 col-md-6" id={course.slug}>
      <div className="sis-course-card" data-aos="fade-up--" data-aos-delay={delay}>
        <span className="sis-course-level">{course.level}</span>
        <h3>{course.title}</h3>
        {course.duration && <p className="mb-2"><strong>{course.duration}</strong></p>}
        <p>{course.description}</p>
        {highlights.length > 0 && (
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>
                <i className="fa-solid fa-check"></i>
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/public/courses`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load courses");
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setCourses(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) setCourses([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="sis-courses-list-section section pt-0"><div className="container"><p>Loading courses…</p></div></div>;

  return (
    <div className="sis-courses-list-section section pt-0">
      <div className="container">
        <div className="row g-4">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} delay={100 + (index % 3) * 100} />
          ))}
        </div>
      </div>
    </div>
  );
}
