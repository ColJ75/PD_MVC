namespace Extranet.Models
{
	public class Person
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string EmailAddress { get; set; }

		public Person(string firstName, string lastName, string emailAddress)
		{
			FirstName = firstName;
			LastName = lastName;
			EmailAddress = emailAddress;
		}
	}
}
