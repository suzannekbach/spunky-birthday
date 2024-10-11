import java.util.*;

public class Birthday {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("This is a choose your own adventure birthday card." 
			+ " Would you like a regular, normal birthday phrase?"
			+ " Or would you prefer one with a little bit of ✨spunk✨?");
		System.out.print("Enter your choice of either normal or spunkified <:-) : ");

		Set<String> validChoices = Set.of("normal", "spunkified");

		String choice = scanner.nextLine();
		while (!validChoices.contains(choice.toLowerCase())) {
			System.out.print(String.format(
				"hmmm, sorry, I only know a few words (%s) :/ and %s isn't one of them. "
				+ "Please enter a word that I know: ", validChoices, choice));
			choice = scanner.nextLine();
		}
		if (choice.equalsIgnoreCase("normal")) {
			sayHappyBirthday("Nikki");
		} else {
			Set<String> spunkyWordsIknow = Set.of("radical, awesome, sick, gnarly, groovy, tubular");
			System.out.println("Great choice! Of the following words, which is your favorite?");
			System.out.println(spunkyWordsIknow);
			System.out.print("Or, if none of those seem cool enough, teach me something new: ");
			String spunkyWord = scanner.nextLine();
			if (!spunkyWordsIknow.contains(spunkyWord)) {
				System.out.println("huh, " + spunkyWord + ". That's cool! Thanks for sharing!");
			}
			sayHappyBirthdayButMakeItSpunky("Nikki", spunkyWord);
		}
	}

	public static void sayHappyBirthday(String name) {
		System.out.println(String.format("Happy birthday, %s! 🎉", name));
	}

	public static void sayHappyBirthdayButMakeItSpunky(String name, String spunkyWord) {
		Set<Character> vowels = Set.of('a', 'e', 'i', 'o', 'u');
		String schmunkyWord = "schm";
		String readyToschmunkify = spunkyWord;
		while (!vowels.contains(readyToschmunkify.charAt(0))) {
			readyToschmunkify = readyToschmunkify.substring(1, readyToschmunkify.length());
		}
		schmunkyWord+= readyToschmunkify;
		System.out.println("We've got an absolute rock and roll situation on our hands, folks!" 
			+ " In fact, I'd go as far as to say it's " + spunkyWord + "! " + spunkyWord + ", "
			+ schmunkyWord + " fr, fr.");
		sayHappyBirthday(name); 
	}
}







