import "./about.css"
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="aboutHeader">
                <div className="aboutHeaderHeadings">
                    <span className="aboutHeaderTitleSm">Everyday is a Change</span>
                    <span className="aboutHeaderTitleLg">To be Better.</span>
                </div>
            </div>

            <section id="features">

                <div class="row">

                    <div class="features-box col-lg-4">
                        <i class="fas fa-check-circle check features-icons"></i>
                        <h3 class="features-headings">Easy to use.</h3>
                        <p>Everything is made in such a way that it's really easy to use.</p>
                    </div>

                    <div class="features-box col-lg-4">
                        <i class="fas fa-bullseye bullseye features-icons"></i>
                        <h3 class="features-headings">On Point.</h3>
                        <p>To the point and straight-forward.</p>
                    </div>

                    <div class="features-box col-lg-4">
                        <i class="fas fa-heart features-icons"></i>
                        <h3 class="features-headings">Guaranteed to work.</h3>
                        <p>Will simply just work however you want.</p>
                    </div>

                </div>

            </section>


            <section id="cta">

                <h3>Get Started with Blogify.</h3>

                <Link className="link" to="/">
                    <button type="button" class="btn btn-lg">Home</button>
                </Link>

                <Link className="link" to="/write">
                    <button type="button" class="btn btn-lg">Write</button>
                </Link>


            </section>

            <footer id="footer">

                <i class="footer-icons fab fa-facebook"></i>
                <i class="footer-icons fab fa-instagram"></i>
                <i class="footer-icons fab fa-twitter"></i>
                <i class="footer-icons fas fa-envelope"></i>

                <p>© Copyright Blogify</p>

            </footer>
        </div>
    );
}
