import { GradientTitle } from "@/components/ui/gradient-title";
import { Body } from "@/components/ui/Typography/Body";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/newsletter/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="container mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Hej!
			</GradientTitle>
			<ul>
				<li>Pracujesz na etacie, ale chcesz zmienić branżę?</li>
				<li>Marzysz o zostaniu programistą i pracy w branży IT ?</li>
				<li>Myślisz, że zmiana branży jest nieosiągalnym wyzwaniem?</li>
			</ul>
			<Body>
				Wiem co czujesz. <br />
				Też tak miałem.
			</Body>
			<Body>
				Przez większość mojego życia odsuwałem od siebie marzenie o byciu
				programistą i robieniu tego co kocham. W 2020 roku spełniłem marzenie i
				zostałem programistą. W newsletterze pokazuję, jak to zrobiłem pomimo
				pracy na etacie i obowiązków rodzinnych.
			</Body>

			<h2 className="flex items-center font-semibold text-md">
				Dlaczego powinieneś się zapisać?
			</h2>
			<ul>
				<li>pokażę Ci jak uczyłem się programowania na własną rękę</li>
				<li>
					co tydzień dostaniesz mięsisty email o tym, jak zostać programistą
				</li>
				<li>
					pokażę Ci jak zmienić branżę tak, by nie ucierpiały Twoje finanse i
					relacje z bliskimi
				</li>
			</ul>
			<Body>
				Wszystko to bez motywacyjnego bełkotu i lania wody. Konkrety, które sam
				chciałem dostać na początku. Konkrety o których nikt inny Ci nie powie.
			</Body>
			<h2 className="flex items-center font-semibold text-md">
				Dlaczego możesz mi zaufac?
			</h2>
			<Body>
				Przez 10 lat byłem inżynierem w branży samochodowej. Za pomocą programu
				ICEMSurf tworzyłem powierzchnie klasy A dla największych marek
				samochodowych. Pracowałem dla takich marek jak Volkswagen, Porsche czy
				Volvo. Jednak coś ciągle mówiło mi, że to nie jest to.
			</Body>
			<Body>
				Z bagażem życiowych doświadczeń, rodziną i 30 na karku postanowiłem coś
				zmienić.
				<strong>
					{" "}
					Postanowiłem, że zostanę frontend web developerem. Zacząłem wstawać
					codziennie o 5 rano, by uczyć się programowania na własną rękę.
				</strong>
			</Body>
			<Body>
				I tak mijały dni i lata . . . Po prawie 3 latach pełnych silnej woli i
				pragnienia udało się.{" "}
				<strong>
					W dniu 1.12.2020 zacząłem pracę jako programistafrontend w jednej z
					największych Niemieckich firm z branży informatycznej.
				</strong>{" "}
			</Body>
			<Body>
				Czy było łatwo ? Pewnie, że nie ! Jeżeli ktoś mówi Ci, że jest to łatwy
				proces. Dobrze radzę przestań słuchać.
			</Body>
			<strong>
				Chcesz zmienić branżę ?<br />
				Chcesz zostać programistą ?<br /> Założyłem ten newsletter, by Ci pomóc.
				<br />
			</strong>
			<Body>
				Świetnie ! Muszę jednak coś zaznaczyć. To nie będzie łatwa podróż.
				Koniec, końców wszystko rozbija się o to jak bardzo tego pragniesz. No
				więc, jak będzie ? Pragniesz tego z całego serducha i nie widzisz siebie
				w innym zawodzie ?
			</Body>
			<Body>
				Zapraszam Cię na pokład. Czeka Cię podróż pełna pasji, poświęceń i
				radości.
			</Body>
			<div className={"flex w-full justify-end align-baseline"}>
				<img
					src={"/images/signature.webp"}
					alt="podpis"
					className="aspect-video w-40 dark:hidden"
				/>
				<img
					src={"/images/signature-dark.webp"}
					alt="podpis"
					className="hidden aspect-video w-40 dark:block"
				/>
			</div>
		</div>
	);
}
