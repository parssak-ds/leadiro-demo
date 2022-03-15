const baseSearchResults: ISearchResult[] = [
  {
    id: "1",
    name: "Jenny Wilson",
    title: "Lord of All Things Technical",
    socials: {
      twitter: "https://twitter.com/jennywilson",
      linkedin: "https://www.linkedin.com/in/jennywilson/",
      email: "jenny@wilson.com",
      cell: "123-456-7890",
      text: "123-456-7890",
    },
    info: (
      <>
        <h4 className="font-medium">Founding Years Learning Solutions Pvt. Ltd.</h4>
        <p className="text-gray-500">
          Bangalore, Karnataka, India <br />
          Education and Training
          <br />
          500-999 employees
        </p>
      </>
    ),
  },
  {
    id: "2",
    name: "Marcus Rudy",
    title: "Marketplace Director",
    socials: {
      twitter: "https://twitter.com/marcusrudy",
      linkedin: "https://www.linkedin.com/in/marcusrudy/",
      email: "marcus@rudy.com",
      cell: "123-456-7890",
      text: "123-456-7890",
    },
    info: (
      <>
        <h4 className="font-medium">HomeDirect, Inc.</h4>
        <p className="text-gray-500">
          Downers Grove, IL, United States <br />
          Transportation and Logistics <br />
          250-499 employees
        </p>
      </>
    ),
  },
  {
    id: "3",
    name: "Cody Fisher",
    title: "Wiz Kid",
    socials: {
      twitter: "https://twitter.com/codyfisher",
      linkedin: "https://www.linkedin.com/in/codyfisher/",
      email: "email@email.com",
      cell: "123-456-7890",
      text: "123-456-7890",
    },
    info: (
      <>
        <h4 className="font-medium">Concord Management Services</h4>
        <p className="text-gray-500">
          Maitland, FL, United States <br />
          Real Estate <br />
          100-499 employees
        </p>
      </>
    ),
  },
  {
    id: "4",
    name: "Jacob Jones",
    title: "Wiz Kid",
    socials: {
      twitter: "https://twitter.com/jacobjones",
      linkedin: "https://www.linkedin.com/in/jacobjones/",
      email: "email@email.com",
      cell: "123-456-7890",
      text: "123-456-7890",
    },
    info: (
      <>
        <h4 className="font-medium">XTRA Lease</h4>
        <p className="text-gray-500">
          Maitland, FL, United States <br />
          Real Estate <br />
          100-499 employees
        </p>
      </>
    ),
  },
];

const generateNResults = (n: number) => {
  const results = [];
  for (let i = 0; i < n; i++) {
    const newResult = { ...baseSearchResults[i % baseSearchResults.length] };
    newResult.id = `${i}`;
    results.push(newResult);
  }

  return results;
};

export const searchResults = generateNResults(20);
