export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100 min-h-screen text-gray-800 font-light font-serif">
      <div className="absolute inset-0 bg-[url('/waves.svg')] bg-no-repeat bg-cover opacity-20 z-0"></div>

      <section className="relative z-10 max-w-3xl mx-auto py-24 px-6 space-y-12">
        <div className="text-center relative">
          <div className="w-full h-48 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-200 rounded-lg shadow-sm mb-8 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-32 opacity-30">
              <path fill="#fbcfe8" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,256C672,256,768,224,864,213.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className="flex flex-col items-center z-10">
              <h1 className="text-5xl font-light text-gray-700 tracking-wide">Katarina's Data Variations</h1>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://gitlab.com/katarina.hds" className="text-blue-600 underline">GitLab</a>
            <a href="https://www.linkedin.com/in/katarina-hds" className="text-blue-600 underline">LinkedIn</a>
            <a href="/KatarinaDS%20Resume1UWW.pdf" className="text-blue-600 underline">Resume</a>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="leading-relaxed text-lg">
            Certified multilingual data analyst with formal training in machine learning, SQL, and business analytics. I transform data into actionable insights and compelling stories that support evidence-based decision-making.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              <a href="/capstone2report.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                📈 Predicting Tech IPO Market Cap
              </a>
            </h3>
            <p>
              Built ML models (RF, XGBoost, LightGBM, stacking) on Nasdaq data to predict IPO valuations. Achieved 89%
              accuracy using ensemble techniques and a scalable pipeline for 81 million rows.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img src="/c2_1.png" alt="Data Wrangling to Modeling" className="rounded shadow hover:opacity-90" />
              <img src="/ratios.png" alt="Financial Ratios" className="rounded shadow hover:opacity-90" />
              <img src="/EDA Insights.png" alt="EDA Insights" className="rounded shadow hover:opacity-90" />
              <img src="/ChatGPT Image May 17, 2025, 02_43_24 PM.png" alt="Model Architecture" className="rounded shadow hover:opacity-90" />
              <img src="/ChatGPT Image May 17, 2025, 02_45_26 PM.png" alt="IPO Valuation" className="rounded shadow hover:opacity-90" />
              <img src="/ChatGPT Image May 17, 2025, 02_47_15 PM.png" alt="Valuation Framework" className="rounded shadow hover:opacity-90" />
              <img src="/ChatGPT Image May 17, 2025, 02_48_23 PM.png" alt="Practical Implementation" className="rounded shadow hover:opacity-90" />
              <img src="/ChatGPT Image May 17, 2025, 02_49_32 PM.png" alt="Feature Importance" className="rounded shadow hover:opacity-90" />
              <img src="/ChatGPT Image May 17, 2025, 02_50_51 PM.png" alt="Model Comparison" className="rounded shadow hover:opacity-90" />
              <img src="/ChatGPT Image May 17, 2025, 02_51_58 PM.png" alt="Startup Valuation Methods" className="rounded shadow hover:opacity-90" />
              <img src="/ChatGPT Image May 17, 2025, 02_52_55 PM.png" alt="Price/Sales Valuation" className="rounded shadow hover:opacity-90" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              <a href="/capstone3report1.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                🧮 Mobile Payment Forecasting in Asia
              </a>
            </h3>
            <p>
              Built forecasting model using World Bank indicators and RidgeCV. Analyzed digital banking trends across 7
              Southeast Asian countries. Reached 89% model accuracy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <img src="/ChatGPT Image May 17, 2025, 03_08_11 PM.png" alt="Mobile Payments SE Asia" className="rounded shadow hover:opacity-90" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              <a href="/ITSCM773_HW2.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                🧾 SQL Restaurant Database (ITSCM 773)
              </a>
            </h3>
            <p>
              Designed a normalized schema, wrote complex queries and update statements, and reflected on how databases power dashboards.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-1">
            <li>Programming Languages: Python, R, SQL</li>
            <li>Statistical Software: SPSS, STATA, SAS</li>
            <li>Time Series Analysis & Regression Modeling</li>
            <li>Machine Learning: Scikit-learn</li>
            <li>Data Visualization: Tableau, Matplotlib, Seaborn, Plotly</li>
            <li>Ensemble Methods: RF, XGBoost, LightGBM, SVM</li>
            <li>Big Data Tools: Apache Spark, Parquet, PyArrow</li>
            <li>Model Development: Pandas, NumPy, SciPy</li>
            <li>Process Optimization</li>
            <li>Database Management: MySQL</li>
            <li>ETL Pipeline Development</li>
            <li>Tools: Jupyter, PyCharm, DataSpell</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Data Certifications</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-1">
            <li>Certified Professional Data Analyst — DataCamp</li>
            <li>Certified Data Analyst Associate — DataCamp</li>
            <li>Certified AI Engineer for Data Scientists Associate — DataCamp</li>
            <li>Advanced Machine Learning Data Science Career Certificate — Springboard</li>
            <li>Machine Learning Statistical Foundations Professional Certificate — Wolfram Research</li>
            <li>Statistics Foundations Professional Certificate — Wolfram Research</li>
            <li>Python for Data Science Professional Certificate — Anaconda</li>
            <li>Data Science Professional Certificate — KNIME</li>
            <li>Programming with Python Professional Certificate — OpenEDG Python Institute</li>
            <li>Certified Data Engineer Associate — DataCamp</li>
            <li>Data Engineering Foundations Professional Certificate — Astronomer</li>
            <li>Docker Foundations Professional Certificate — Docker</li>
            <li>Network Automation Professional Certificate — Arista Networks</li>
            <li>SQL for Business Analysts — DataCamp</li>
            <li>Financial Analysis and Modeling Professional Certificate — CFI</li>
            <li>Corporate Finance Foundations Professional Certificate — CFI</li>
            <li>Career Essentials in Business Analysis — Microsoft and LinkedIn</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Finance with R & Python</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-1">
            <li>Built ARIMA, Holt-Winters, and Exponential Smoothing models in R for time-series forecasting of financial indices</li>
            <li>Used quantmod, tidyquant, and tseries for historical stock analysis, CAPM, and VaR</li>
            <li>Applied Monte Carlo simulations for risk modeling and portfolio optimization</li>
            <li>Implemented Python-based financial modeling pipelines using yfinance, NumPy, and SciPy</li>
            <li>Created interactive financial dashboards with Plotly and Streamlit for scenario analysis</li>
          </ul>
        </section>

        <footer className="pt-12 border-t mt-12 text-sm text-gray-500 text-center">
          📬 katarina.hds@gmail.com · 📍 DFW, TX · <a href="https://www.linkedin.com/in/katarina-hds" className="underline">LinkedIn</a> · <a href="https://gitlab.com/katarina.hds" className="underline">GitLab</a>
        </footer>
      </section>
    </main>
  );
}









