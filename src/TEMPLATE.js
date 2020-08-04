import moment from "moment";

const getLengthOfLanguages = (langs) => {
  if (langs && langs.length) {
    return langs.length;
  }
  return 0;
};

export const generateFromData = (
  userName,
  email,
  phoneNumber,
  gitProfile,
  website,
  currentRole,
  introduction,
  companyName,
  jobTitle,
  stack,
  years,
  platforms,
  languagesAndFrameworks,
  keywords
) => `
Dear ${companyName} Hiring Team,

I am writing to you in response to the open ${jobTitle} role at ${companyName}.

As a seasoned ${currentRole} with ${
  years ? years + "+ years experience developing" : "extensive knowledge of"
} diverse ${stack} applications, my skill-set aligns very well with your needs for a new ${jobTitle}, and will allow me to make an immediate contribution to ${companyName}’s continued success.

To quickly introduce myself, ${introduction}

My technical stack includes ${
  platforms ? "cross-platform proficiency (" + platforms + "); " : ""
}fluency in ${getLengthOfLanguages(
  languagesAndFrameworks
)}+ programming languages/frameworks (including ${
  languagesAndFrameworks ? languagesAndFrameworks[0] : ""
},${languagesAndFrameworks ? languagesAndFrameworks[1] : ""},${
  languagesAndFrameworks ? languagesAndFrameworks[2] : ""
}, and${
  languagesAndFrameworks ? languagesAndFrameworks[3] : ""
}); and advanced knowledge of developer applications, patterns, and best practices (including ${
  keywords ? keywords[0] : ""
}, ${keywords ? keywords[1] : ""}, and ${keywords ? keywords[2] : ""}).

Attached, you will find high-level summaries of my job duties, software applications, and education history in my resume. I can be reached anytime via my cell phone ${phoneNumber} or via email at ${email}. 

Thank you for your time and consideration. I look forward to speaking with you about this opportunity.

Sincerely,

${userName}

Email: ${email}
Phone: ${phoneNumber}
GitHub: github.com/${gitProfile}
Website: ${website}

${moment().format("MMMM Do, YYYY")}
`;
