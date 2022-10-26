import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class=" bg-light">
      <div class="container ">
        <div class="row">
          <div class="col-lg-3 mt-3">
            <h4 class="text-muted">হোবায়ের ব্লগ</h4>
            <div>
              <Link to="/admin" class="text-decoration-none text-muted">
                Admin Panel
              </Link>
              <br />
              <a href="" class="text-decoration-none text-muted">
                Me
              </a>
            </div>
          </div>
          <div class="col-lg-3 mt-3">
            <h4 class="text-muted">আমার অন্যান্য সাইট</h4>
            <div>
              <a href="" class="text-decoration-none text-muted">
                Advertise
              </a>
              <br />
              <a href="" class="text-decoration-none text-muted">
                Web Creator
              </a>
              <br />
              <a href="" class="text-decoration-none text-muted">
                Profit
              </a>
            </div>
          </div>
          <div class="col-lg-3 mt-3">
            <h4 class="text-muted">সোসিয়াল মিডিয়া</h4>
            <div>
              <a href="" class="text-decoration-none text-muted">
                Publisher
              </a>
              <br />
              <a href="" class="text-decoration-none text-muted">
                Refund Policy
              </a>
              <br />
              <a href="" class="text-decoration-none text-muted">
                Terms Of Service
              </a>
              <br />
              <a href="" class="text-decoration-none text-muted">
                Data protection
              </a>
              <br />
              <a href="" class="text-decoration-none text-muted">
                FAQ
              </a>
              <br />
              <a href="" class="text-decoration-none text-muted">
                {" "}
                Contact
              </a>
            </div>
          </div>
          <div class="col-lg-3 mt-3">
            <figure>
              <blockquote class="blockquote">
                <p>
                  আমার দেখা সকল সমস্যারই একটি সমাধান রয়েছে আমাকে শুধু সমাধান টা
                  বের করতে হবে
                </p>
              </blockquote>
              <figcaption class="blockquote-footer">
                admin <cite title="Source Title"> হোবায়ের গোলন্দাজ তুষার</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Footer;
