/* =====================================================================
   GO2ABROAD — Country detail page interactivity
   Scrollspy for the sticky left TOC + a client-side cost calculator
   and university finder, driven by the COUNTRY_DATA object below.
   Each country page sets <body data-country="usa"> to select its data.
   ===================================================================== */

var COUNTRY_DATA = {
	usa: {
		name: "USA",
		currency: "USD",
		symbol: "$",
		inrPerUnit: 83,
		tuition: { ug: [20000, 45000], pg: [25000, 50000], mba: [40000, 80000] },
		living: [12000, 20000],
		universities: [
			{ name: "Arizona State University", location: "Arizona", tags: ["engineering", "computer-science", "business"], url: "arizona-state-university.html" },
			{ name: "University of Texas at Dallas", location: "Texas", tags: ["business", "computer-science"] },
			{ name: "Northeastern University", location: "Massachusetts", tags: ["computer-science", "business"] },
			{ name: "University at Buffalo (SUNY)", location: "New York", tags: ["engineering", "computer-science"] },
			{ name: "Illinois Institute of Technology", location: "Illinois", tags: ["engineering", "computer-science"] },
			{ name: "Clark University", location: "Massachusetts", tags: ["business", "arts"] }
		]
	},
	uk: {
		name: "UK",
		currency: "GBP",
		symbol: "£",
		inrPerUnit: 106,
		tuition: { ug: [14000, 25000], pg: [15000, 30000], mba: [25000, 45000] },
		living: [12000, 16000],
		universities: [
			{ name: "University of Essex", location: "Colchester", tags: ["arts", "business"] },
			{ name: "University of Leicester", location: "Leicester", tags: ["business", "health"] },
			{ name: "Coventry University", location: "Coventry", tags: ["engineering", "business"] },
			{ name: "University of Hertfordshire", location: "Hertfordshire", tags: ["engineering", "computer-science"] },
			{ name: "Cardiff Metropolitan University", location: "Cardiff", tags: ["business"] },
			{ name: "Aston University", location: "Birmingham", tags: ["business", "engineering"] }
		]
	},
	canada: {
		name: "Canada",
		currency: "CAD",
		symbol: "C$",
		inrPerUnit: 61,
		tuition: { ug: [18000, 30000], pg: [18000, 35000], mba: [30000, 55000] },
		living: [12000, 15000],
		universities: [
			{ name: "Conestoga College", location: "Ontario", tags: ["business", "engineering"] },
			{ name: "Seneca Polytechnic", location: "Ontario", tags: ["business", "computer-science"] },
			{ name: "University of Windsor", location: "Ontario", tags: ["engineering", "business"] },
			{ name: "Cape Breton University", location: "Nova Scotia", tags: ["business"] },
			{ name: "Trent University", location: "Ontario", tags: ["arts", "business"] },
			{ name: "Schulich School of Business (York University)", location: "Ontario", tags: ["business"] }
		]
	},
	australia: {
		name: "Australia",
		currency: "AUD",
		symbol: "A$",
		inrPerUnit: 55,
		tuition: { ug: [22000, 35000], pg: [22000, 40000], mba: [35000, 55000] },
		living: [18000, 24000],
		universities: [
			{ name: "Deakin University", location: "Victoria", tags: ["business", "computer-science"] },
			{ name: "RMIT University", location: "Victoria", tags: ["engineering", "business"] },
			{ name: "University of Wollongong", location: "NSW", tags: ["engineering", "business"] },
			{ name: "Griffith University", location: "Queensland", tags: ["business", "health"] },
			{ name: "Victoria University", location: "Victoria", tags: ["business"] },
			{ name: "Curtin University", location: "Western Australia", tags: ["engineering", "business"] }
		]
	},
	"new-zealand": {
		name: "New Zealand",
		currency: "NZD",
		symbol: "NZ$",
		inrPerUnit: 50,
		tuition: { ug: [22000, 32000], pg: [26000, 37000], mba: [35000, 50000] },
		living: [15000, 20000],
		universities: [
			{ name: "University of Auckland", location: "Auckland", tags: ["engineering", "business"] },
			{ name: "Auckland University of Technology", location: "Auckland", tags: ["business", "computer-science"] },
			{ name: "University of Waikato", location: "Hamilton", tags: ["business", "computer-science"] },
			{ name: "Victoria University of Wellington", location: "Wellington", tags: ["arts", "business"] },
			{ name: "Massey University", location: "Palmerston North", tags: ["business", "agriculture"] },
			{ name: "Lincoln University", location: "Canterbury", tags: ["agriculture", "business"] }
		]
	},
	germany: {
		name: "Germany",
		currency: "EUR",
		symbol: "€",
		inrPerUnit: 90,
		tuition: { ug: [0, 3000], pg: [0, 20000], mba: [15000, 40000] },
		living: [11000, 12500],
		universities: [
			{ name: "Technical University of Munich", location: "Munich", tags: ["engineering"] },
			{ name: "RWTH Aachen University", location: "Aachen", tags: ["engineering"] },
			{ name: "University of Mannheim", location: "Mannheim", tags: ["business"] },
			{ name: "TU Berlin", location: "Berlin", tags: ["engineering", "computer-science"] },
			{ name: "University of Stuttgart", location: "Stuttgart", tags: ["engineering"] },
			{ name: "Frankfurt School of Finance & Management", location: "Frankfurt", tags: ["business"] }
		]
	},
	ireland: {
		name: "Ireland",
		currency: "EUR",
		symbol: "€",
		inrPerUnit: 90,
		tuition: { ug: [12000, 25000], pg: [12000, 30000], mba: [20000, 40000] },
		living: [10000, 14000],
		universities: [
			{ name: "Trinity College Dublin", location: "Dublin", tags: ["business", "engineering"] },
			{ name: "University College Dublin", location: "Dublin", tags: ["business", "computer-science"] },
			{ name: "Dublin City University", location: "Dublin", tags: ["business", "engineering"] },
			{ name: "University of Galway", location: "Galway", tags: ["business", "health"] },
			{ name: "University of Limerick", location: "Limerick", tags: ["engineering", "business"] },
			{ name: "Technological University Dublin", location: "Dublin", tags: ["business", "engineering"] }
		]
	},
	singapore: {
		name: "Singapore",
		currency: "SGD",
		symbol: "S$",
		inrPerUnit: 62,
		tuition: { ug: [15000, 30000], pg: [20000, 40000], mba: [40000, 60000] },
		living: [10000, 14000],
		universities: [
			{ name: "National University of Singapore", location: "Singapore", tags: ["business", "engineering"] },
			{ name: "Nanyang Technological University", location: "Singapore", tags: ["engineering", "business"] },
			{ name: "Singapore Management University", location: "Singapore", tags: ["business"] },
			{ name: "James Cook University Singapore", location: "Singapore", tags: ["business", "computer-science"] },
			{ name: "PSB Academy", location: "Singapore", tags: ["business"] },
			{ name: "Kaplan Higher Education Singapore", location: "Singapore", tags: ["business", "computer-science"] }
		]
	}
};

document.addEventListener("DOMContentLoaded", function () {

	/* ---------------- Scrollspy for the sticky left TOC ---------------- */
	var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".sis-country-toc ul a[href^='#']"));
	var sections = [];
	tocLinks.forEach(function (link) {
		var id = link.getAttribute("href").slice(1);
		var el = document.getElementById(id);
		if (el) sections.push({ el: el, link: link });
	});

	if (sections.length && "IntersectionObserver" in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				var match = sections.filter(function (s) { return s.el === entry.target; })[0];
				if (!match) return;
				if (entry.isIntersecting) {
					tocLinks.forEach(function (l) { l.classList.remove("active"); });
					match.link.classList.add("active");
				}
			});
		}, { rootMargin: "-110px 0px -65% 0px", threshold: 0 });
		sections.forEach(function (s) { observer.observe(s.el); });

		// Highlight the first item by default
		if (tocLinks.length) tocLinks[0].classList.add("active");
	}

	/* ---------------- Cost calculator ---------------- */
	var calcForm = document.getElementById("costCalcForm");
	if (calcForm) {
		var countryKey = document.body.getAttribute("data-country");
		var data = COUNTRY_DATA[countryKey];
		calcForm.addEventListener("submit", function (e) {
			e.preventDefault();
			if (!data) return;
			var level = document.getElementById("calcLevel").value;
			var years = parseFloat(document.getElementById("calcYears").value) || 1;
			var tRange = data.tuition[level] || data.tuition.ug;
			var lRange = data.living;

			var tuitionMin = tRange[0] * years;
			var tuitionMax = tRange[1] * years;
			var livingMin = lRange[0] * years;
			var livingMax = lRange[1] * years;
			var totalMin = tuitionMin + livingMin;
			var totalMax = tuitionMax + livingMax;

			var fmt = function (n) { return data.symbol + Math.round(n).toLocaleString("en-IN"); };
			var fmtInr = function (n) { return "₹" + Math.round(n * data.inrPerUnit).toLocaleString("en-IN"); };

			document.getElementById("calcTotal").textContent = fmt(totalMin) + " – " + fmt(totalMax);
			document.getElementById("calcTotalInr").textContent = "Approx. " + fmtInr(totalMin) + " – " + fmtInr(totalMax) + " (INR)";
			document.getElementById("calcTuitionOut").textContent = fmt(tuitionMin) + " – " + fmt(tuitionMax);
			document.getElementById("calcLivingOut").textContent = fmt(livingMin) + " – " + fmt(livingMax);
			document.getElementById("calcYearsOut").textContent = years;

			var result = document.getElementById("costCalcResult");
			result.classList.add("show");
			result.scrollIntoView({ behavior: "smooth", block: "nearest" });
		});
	}

	/* ---------------- University finder ---------------- */
	var finderForm = document.getElementById("uniFinderForm");
	if (finderForm) {
		var fCountryKey = document.body.getAttribute("data-country");
		var fData = COUNTRY_DATA[fCountryKey];
		finderForm.addEventListener("submit", function (e) {
			e.preventDefault();
			if (!fData) return;
			var field = document.getElementById("finderField").value;
			var list = fData.universities.filter(function (u) {
				return field === "" || u.tags.indexOf(field) !== -1;
			});
			var resultBox = document.getElementById("uniFinderResult");
			if (!list.length) {
				resultBox.innerHTML = "<p class='mb-0'>No exact matches — talk to a counsellor and we'll widen the search for you.</p>";
			} else {
				resultBox.innerHTML = list.map(function (u) {
					var link = u.url ? '<a href="' + u.url + '" class="sis-country-card-link" style="white-space:nowrap;">View Details <i class="fa-solid fa-arrow-right-long"></i></a>' : '';
					return '<div class="sis-uni-card"><div class="d-flex align-items-start gap-3"><div class="sis-uni-icon"><i class="fa-solid fa-building-columns"></i></div><div><h4 class="mb-0">' + u.name + '</h4><div class="sis-uni-meta">' + u.location + '</div></div></div>' + link + '</div>';
				}).join("");
			}
			resultBox.classList.add("show");
			resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
		});
	}

});
